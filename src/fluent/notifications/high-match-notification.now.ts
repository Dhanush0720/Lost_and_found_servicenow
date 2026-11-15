import '@servicenow/sdk/global'
import { EmailNotification } from '@servicenow/sdk/core'

EmailNotification({
    $id: Now.ID['notif_high_match'],
    table: 'x_1526023_lost_and_match',
    name: 'High Confidence Match Found',
    description: 'Notify the lost item reporter when a high-confidence match is created',
    active: true,
    triggerConditions: {
        onRecordInsert: true,
        condition: 'band=high',
    },
    recipientDetails: {
        recipientFields: ['lost_item.reporter'],
    },
    emailContent: {
        subject: 'Lost and Found: High confidence match for your lost item',
        messageHtml: '<p>Good news! A high-confidence match has been found for your lost item.</p><p><b>Confidence Score:</b> ${confidence_score}%</p><p><b>Match Band:</b> ${band}</p><p>Please visit the Lost and Found desk to verify and claim your item.</p>',
    },
})
