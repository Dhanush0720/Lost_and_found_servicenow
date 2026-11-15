import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const lostFoundMainWidget = SPWidget({
    $id: Now.ID['widget_lost_found_main'],
    id: 'x_1526023_lost_and_main_widget',
    name: 'RCE Lost & Found Main Portal Widget',
    description: 'Main self-service interactive interface for Lost & Found items, claims and matching at Ramachandra College of Engineering',
    category: 'custom',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.css'),
    hasPreview: true,
})
