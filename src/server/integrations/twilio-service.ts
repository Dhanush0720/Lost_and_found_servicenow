import { gs } from '@servicenow/glide'
import { RESTMessageV2 } from '@servicenow/glide/sn_ws'

/**
 * Sends an automated WhatsApp message via Twilio API.
 * @param toPhone Recipient phone number (e.g. "+919493698980" or "whatsapp:+919493698980")
 * @param messageBody Text content of the WhatsApp message
 * @returns boolean indicating success
 */
export function sendWhatsAppMessage(toPhone: string, messageBody: string): boolean {
    try {
        var isEnabled = gs.getProperty('x_1526023_lost_and.twilio.enabled', 'false') === 'true'
        if (!isEnabled) {
            gs.info('Twilio WhatsApp notifications are currently disabled.')
            return false
        }

        var accountSid = gs.getProperty('x_1526023_lost_and.twilio.account_sid', '')
        var authToken = gs.getProperty('x_1526023_lost_and.twilio.auth_token', '')
        var fromNumber = gs.getProperty('x_1526023_lost_and.twilio.from_number', 'whatsapp:+19362260219')

        if (!accountSid || !authToken || !fromNumber) {
            gs.error('Twilio WhatsApp configuration is incomplete. Check System Properties.')
            return false
        }

        // Format recipient phone number
        var formattedTo = toPhone.trim()
        if (!formattedTo.startsWith('whatsapp:')) {
            if (!formattedTo.startsWith('+')) {
                formattedTo = '+' + formattedTo
            }
            formattedTo = 'whatsapp:' + formattedTo
        }

        var endpoint = 'https://api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json'

        var request = new RESTMessageV2()
        request.setEndpoint(endpoint)
        request.setHttpMethod('POST')
        request.setBasicAuth(accountSid, authToken)
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

        var payload = 'To=' + encodeURIComponent(formattedTo) +
            '&From=' + encodeURIComponent(fromNumber) +
            '&Body=' + encodeURIComponent(messageBody)

        request.setRequestBody(payload)

        var response = request.execute()
        var statusCode = response.getStatusCode()
        var responseBody = response.getBody()

        if (statusCode >= 200 && statusCode < 300) {
            gs.info('WhatsApp message sent successfully to ' + formattedTo)
            return true
        } else {
            gs.error('Failed to send WhatsApp message. Status: ' + statusCode + ', Response: ' + responseBody)
            return false
        }
    } catch (ex: any) {
        gs.error('Exception in sendWhatsAppMessage: ' + ex.message)
        return false
    }
}
