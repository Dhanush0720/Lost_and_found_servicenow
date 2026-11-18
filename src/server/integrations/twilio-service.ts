import { gs } from '@servicenow/glide'
import { RESTMessageV2 } from '@servicenow/glide/sn_ws'

/**
 * Sends an automated WhatsApp message via Open-WA (free open-source) or Twilio API.
 * Provider is controlled via System Property 'x_1526023_lost_and.whatsapp.provider' ('openwa' | 'twilio').
 * 
 * @param toPhone Recipient phone number (e.g. "+919493698980" or "whatsapp:+919493698980")
 * @param messageBody Text content of the WhatsApp message
 * @returns boolean indicating success
 */
export function sendWhatsAppMessage(toPhone: string, messageBody: string): boolean {
    var provider = gs.getProperty('x_1526023_lost_and.whatsapp.provider', 'openwa').toLowerCase()
    if (provider === 'twilio') {
        return sendViaTwilio(toPhone, messageBody)
    } else {
        return sendViaOpenWa(toPhone, messageBody)
    }
}

/**
 * Sends WhatsApp message via Open-WA REST API (/sendText)
 */
function sendViaOpenWa(toPhone: string, messageBody: string): boolean {
    try {
        var isEnabled = gs.getProperty('x_1526023_lost_and.openwa.enabled', 'true') === 'true'
        if (!isEnabled) {
            gs.info('Open-WA WhatsApp notifications are currently disabled.')
            return false
        }

        var apiUrl = gs.getProperty('x_1526023_lost_and.openwa.api_url', 'http://localhost:8080').trim()
        if (apiUrl.endsWith('/')) {
            apiUrl = apiUrl.slice(0, -1)
        }
        var apiKey = gs.getProperty('x_1526023_lost_and.openwa.api_key', '')

        // Format phone number for Open-WA: digits only + @c.us (e.g. 919493698980@c.us)
        var cleanNumber = toPhone.replace(/[^0-9]/g, '')
        if (!cleanNumber) {
            gs.error('Open-WA: Invalid recipient phone number ' + toPhone)
            return false
        }
        var toRecipient = cleanNumber + '@c.us'

        var endpoint = apiUrl + '/api/messages/sendText'

        var request = new RESTMessageV2()
        request.setEndpoint(endpoint)
        request.setHttpMethod('POST')
        request.setRequestHeader('Content-Type', 'application/json')
        request.setRequestHeader('Accept', 'application/json')
        if (apiKey) {
            request.setRequestHeader('api_key', apiKey)
        }

        var bodyObj = {
            to: toRecipient,
            content: messageBody
        }
        request.setRequestBody(JSON.stringify(bodyObj))

        var response = request.execute()
        var statusCode = response.getStatusCode()
        var responseBody = response.getBody()

        // Fallback to legacy /sendText if 404
        if (statusCode === 404) {
            var legacyReq = new RESTMessageV2()
            legacyReq.setEndpoint(apiUrl + '/sendText')
            legacyReq.setHttpMethod('POST')
            legacyReq.setRequestHeader('Content-Type', 'application/json')
            if (apiKey) legacyReq.setRequestHeader('api_key', apiKey)
            legacyReq.setRequestBody(JSON.stringify(bodyObj))
            response = legacyReq.execute()
            statusCode = response.getStatusCode()
            responseBody = response.getBody()
        }

        if (statusCode >= 200 && statusCode < 300) {
            gs.info('Open-WA message sent successfully to ' + toRecipient)
            return true
        } else {
            gs.error('Failed to send Open-WA message. Status: ' + statusCode + ', Response: ' + responseBody)
            return false
        }
    } catch (ex: any) {
        gs.error('Exception in sendViaOpenWa: ' + ex.message)
        return false
    }
}

/**
 * Sends WhatsApp message via Twilio API
 */
function sendViaTwilio(toPhone: string, messageBody: string): boolean {
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
            gs.info('Twilio WhatsApp message sent successfully to ' + formattedTo)
            return true
        } else {
            gs.error('Failed to send Twilio WhatsApp message. Status: ' + statusCode + ', Response: ' + responseBody)
            return false
        }
    } catch (ex: any) {
        gs.error('Exception in sendViaTwilio: ' + ex.message)
        return false
    }
}
