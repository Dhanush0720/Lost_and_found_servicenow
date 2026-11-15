import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_1526023_lost_and_custody_log',
    view: default_view,
    sections: [
        {
            caption: 'Custody Log Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'found_item', type: 'table_field' },
                        { field: 'event', type: 'table_field' },
                        { field: 'timestamp', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'handled_by', type: 'table_field' },
                        { field: 'notes', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

