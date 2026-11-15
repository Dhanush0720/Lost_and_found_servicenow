import '@servicenow/sdk/global'
import { Table, ReferenceColumn, ChoiceColumn, DateTimeColumn, StringColumn } from '@servicenow/sdk/core'

export const x_1526023_lost_and_custody_log = Table({
    name: 'x_1526023_lost_and_custody_log',
    label: 'Custody Log',
    isExtensible: false,
    allowWebServiceAccess: true,
    schema: {
        found_item: ReferenceColumn({
            label: 'Found item',
            referenceTable: 'x_1526023_lost_and_found_item',
            mandatory: true,
        }),
        event: ChoiceColumn({
            label: 'Event',
            choices: {
                received: { label: 'Received', value: 'received' },
                stored: { label: 'Stored', value: 'stored' },
                released: { label: 'Released', value: 'released' },
                returned: { label: 'Returned', value: 'returned' },
            },
            dropdown: 'dropdown_with_none',
        }),
        handled_by: ReferenceColumn({
            label: 'Handled by',
            referenceTable: 'sys_user',
        }),
        timestamp: DateTimeColumn({
            label: 'Timestamp',
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 254,
        }),
    },
})

