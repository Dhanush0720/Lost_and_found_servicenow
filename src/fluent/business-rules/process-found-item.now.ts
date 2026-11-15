import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { processFoundItemOnInsert } from '../../server/business-rules/process-found-item'

export const ProcessFoundItemOnInsert = BusinessRule({
    $id: Now.ID['br_process_found_item'],
    name: 'Process Found Item On Insert',
    table: 'x_1526023_lost_and_found_item',
    when: 'after',
    action: ['insert'],
    order: 200,
    description: 'After a Found Item is created, add custody log entries and score against Open Lost Items',
    script: processFoundItemOnInsert,
})

