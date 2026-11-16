import '@servicenow/sdk/global'
import { Property } from '@servicenow/sdk/core'

/**
 * Twilio Account SID
 */
export const propTwilioAccountSid = Property({
    $id: Now.ID['prop_twilio_account_sid'],
    name: 'x_1526023_lost_and.twilio.account_sid',
    type: 'string',
    value: '',
    description: 'Twilio Account SID for WhatsApp messaging',
})

/**
 * Twilio Auth Token
 */
export const propTwilioAuthToken = Property({
    $id: Now.ID['prop_twilio_auth_token'],
    name: 'x_1526023_lost_and.twilio.auth_token',
    type: 'string',
    value: '',
    description: 'Twilio Auth Token for WhatsApp messaging',
    isPrivate: true,
})

/**
 * Twilio WhatsApp From Number
 */
export const propTwilioFromNumber = Property({
    $id: Now.ID['prop_twilio_from_number'],
    name: 'x_1526023_lost_and.twilio.from_number',
    type: 'string',
    value: 'whatsapp:+19362260219',
    description: 'Twilio WhatsApp sender phone number with whatsapp: prefix',
})

/**
 * Twilio Integration Enabled Flag
 */
export const propTwilioEnabled = Property({
    $id: Now.ID['prop_twilio_enabled'],
    name: 'x_1526023_lost_and.twilio.enabled',
    type: 'boolean',
    value: true,
    description: 'Enable or disable automated Twilio WhatsApp notifications',
})

/**
 * Active WhatsApp Provider: 'openwa' or 'twilio'
 */
export const propWhatsAppProvider = Property({
    $id: Now.ID['prop_whatsapp_provider'],
    name: 'x_1526023_lost_and.whatsapp.provider',
    type: 'string',
    value: 'openwa',
    description: 'Active WhatsApp notification provider: openwa (free open-source) or twilio',
})

/**
 * Open-WA REST API URL (e.g. ngrok URL or self-hosted endpoint)
 */
export const propOpenWaApiUrl = Property({
    $id: Now.ID['prop_openwa_api_url'],
    name: 'x_1526023_lost_and.openwa.api_url',
    type: 'string',
    value: 'http://localhost:8080',
    description: 'Open-WA REST API base URL (e.g. https://your-tunnel.ngrok-free.app or http://localhost:8080)',
})

/**
 * Open-WA API Key (optional)
 */
export const propOpenWaApiKey = Property({
    $id: Now.ID['prop_openwa_api_key'],
    name: 'x_1526023_lost_and.openwa.api_key',
    type: 'string',
    value: '',
    description: 'Optional API Key configured on Open-WA',
    isPrivate: true,
})

/**
 * Open-WA Integration Enabled Flag
 */
export const propOpenWaEnabled = Property({
    $id: Now.ID['prop_openwa_enabled'],
    name: 'x_1526023_lost_and.openwa.enabled',
    type: 'boolean',
    value: true,
    description: 'Enable or disable automated Open-WA WhatsApp notifications',
})

/**
 * Campus Desk WhatsApp Phone Number for Click-to-Chat
 */
export const propDeskPhoneNumber = Property({
    $id: Now.ID['prop_desk_phone_number'],
    name: 'x_1526023_lost_and.desk_phone_number',
    type: 'string',
    value: '919493698980',
    description: 'Campus Lost and Found Desk WhatsApp Phone Number (international digits only, e.g. 919493698980)',
})
