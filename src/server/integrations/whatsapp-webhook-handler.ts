import { gs, GlideRecord } from '@servicenow/glide'
import { sendWhatsAppMessage } from './twilio-service'

/**
 * Handles incoming WhatsApp webhook messages from Open-WA or Twilio.
 * Automatically extracts details and creates records in Found Items or Lost Items.
 */
export function handleWhatsAppInbound(request: any, response: any): void {
    try {
        var payload: any = {}
        if (request.body && request.body.data) {
            payload = request.body.data
        } else if (request.body && request.body.dataString) {
            try {
                payload = JSON.parse(request.body.dataString)
            } catch (e) {
                payload = {}
            }
        }

        // Extract message text and sender
        var messageText = ''
        var senderPhone = ''
        var senderName = 'WhatsApp User'

        // Check Open-WA structure
        if (payload.body) {
            messageText = String(payload.body).trim()
        } else if (payload.content) {
            messageText = String(payload.content).trim()
        } else if (payload.text) {
            messageText = String(payload.text).trim()
        } else if (payload.Body) {
            // Twilio format
            messageText = String(payload.Body).trim()
        }

        if (payload.from) {
            senderPhone = String(payload.from).replace('@c.us', '').trim()
        } else if (payload.From) {
            // Twilio format
            senderPhone = String(payload.From).replace('whatsapp:', '').trim()
        } else if (payload.sender && payload.sender.id) {
            senderPhone = String(payload.sender.id).replace('@c.us', '').trim()
        }

        if (payload.sender && (payload.sender.pushname || payload.sender.formattedName)) {
            senderName = payload.sender.pushname || payload.sender.formattedName
        } else if (payload.ProfileName) {
            senderName = payload.ProfileName
        }

        if (!messageText) {
            response.setStatus(400)
            response.setBody({ error: 'No message text provided in request' })
            return
        }

        var lowerText = messageText.toLowerCase()

        // Detect whether the user lost an item or found an item
        var isLost = lowerText.indexOf('lost') !== -1 ||
            lowerText.indexOf('missing') !== -1 ||
            lowerText.indexOf('misplaced') !== -1 ||
            lowerText.indexOf('forgot') !== -1

        // Detect Category
        var category = 'other'
        if (lowerText.indexOf('id') !== -1 || lowerText.indexOf('card') !== -1 || lowerText.indexOf('hall ticket') !== -1) {
            category = 'id_card'
        } else if (lowerText.indexOf('laptop') !== -1 || lowerText.indexOf('macbook') !== -1 || lowerText.indexOf('dell') !== -1 || lowerText.indexOf('hp') !== -1) {
            category = 'laptop'
        } else if (lowerText.indexOf('phone') !== -1 || lowerText.indexOf('mobile') !== -1 || lowerText.indexOf('iphone') !== -1) {
            category = 'phone'
        } else if (lowerText.indexOf('key') !== -1) {
            category = 'keys'
        } else if (lowerText.indexOf('wallet') !== -1 || lowerText.indexOf('purse') !== -1) {
            category = 'wallet'
        } else if (lowerText.indexOf('book') !== -1 || lowerText.indexOf('notes') !== -1) {
            category = 'book'
        } else if (lowerText.indexOf('bag') !== -1 || lowerText.indexOf('backpack') !== -1) {
            category = 'bag'
        } else if (lowerText.indexOf('watch') !== -1 || lowerText.indexOf('earbuds') !== -1 || lowerText.indexOf('airpods') !== -1 || lowerText.indexOf('charger') !== -1) {
            category = 'accessory'
        }

        // Clean title
        var itemTitle = messageText.split('\n')[0].substring(0, 80)
        if (itemTitle.length < 5) {
            itemTitle = (isLost ? 'Lost ' : 'Found ') + category.replace('_', ' ')
        }

        var createdNumber = ''

        if (isLost) {
            // Create Lost Item record
            var grLost = new GlideRecord('x_1526023_lost_and_lost_item')
            grLost.initialize()
            grLost.setValue('item_title', itemTitle)
            grLost.setValue('category', category)
            grLost.setValue('description', 'Reported via WhatsApp from ' + senderName + ' (' + senderPhone + ')\nFull Message:\n' + messageText)
            grLost.setValue('state', 'open')
            var lostId = grLost.insert()
            createdNumber = grLost.getValue('number') || 'LOST'

            // Send confirmation auto-reply
            if (senderPhone) {
                sendWhatsAppMessage(
                    senderPhone,
                    'Hello ' + senderName + ', your lost property report has been recorded as ' + createdNumber + '. Our matching engine is active and will alert you if a matching item is handed in.'
                )
            }
        } else {
            // Create Found Item record
            var grFound = new GlideRecord('x_1526023_lost_and_found_item')
            grFound.initialize()
            grFound.setValue('item_title', itemTitle)
            grFound.setValue('category', category)
            grFound.setValue('description', 'Received via WhatsApp from ' + senderName + ' (' + senderPhone + ')\nFull Message:\n' + messageText)
            grFound.setValue('storage_location', 'Campus Security Desk')
            grFound.setValue('state', 'stored')
            var foundId = grFound.insert()
            createdNumber = grFound.getValue('number') || 'FOUND'

            // Log Custody received
            if (foundId) {
                var grCustody = new GlideRecord('x_1526023_lost_and_custody_log')
                grCustody.initialize()
                grCustody.setValue('found_item', foundId)
                grCustody.setValue('event', 'received')
                grCustody.setValue('notes', 'Logged via incoming WhatsApp message from ' + senderPhone)
                grCustody.insert()
            }

            // Send confirmation auto-reply
            if (senderPhone) {
                sendWhatsAppMessage(
                    senderPhone,
                    'Hello ' + senderName + ', thank you for turning this in! Your found report has been recorded in desk custody as ' + createdNumber + '.'
                )
            }
        }

        response.setStatus(200)
        response.setBody({
            success: true,
            type: isLost ? 'lost' : 'found',
            record_number: createdNumber,
            message: 'Report logged successfully in ServiceNow'
        })
    } catch (ex: any) {
        gs.error('Exception in handleWhatsAppInbound: ' + ex.message)
        response.setStatus(500)
        response.setBody({ error: ex.message })
    }
}
