import '@servicenow/sdk/global'
import { RestApi } from '@servicenow/sdk/core'
import { handleWhatsAppInbound } from '../../server/integrations/whatsapp-webhook-handler'

/**
 * Scripted REST API for Inbound WhatsApp Messages (from Open-WA or Twilio webhook).
 * Public endpoint: /api/x_1526023_lost_and/whatsapp/inbound
 */
export const whatsappInboundApi = RestApi({
    $id: Now.ID['whatsapp_inbound_api'],
    name: 'WhatsApp Inbound Service',
    serviceId: 'whatsapp',
    consumes: 'application/json',
    produces: 'application/json',
    shortDescription: 'Receives inbound messages from WhatsApp, parses them, and inserts records into Lost & Found tables',
    routes: [
        {
            $id: Now.ID['route_whatsapp_inbound'],
            name: 'inbound_message',
            method: 'POST',
            path: '/inbound',
            authentication: false,
            authorization: false,
            script: handleWhatsAppInbound,
            shortDescription: 'Webhook handler for incoming WhatsApp text messages',
        },
    ],
})
