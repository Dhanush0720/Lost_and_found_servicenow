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
