import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_1526023_lost_and_lost_item',
    view: default_view,
    sections: [
        {
            caption: 'Item Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'reporter', type: 'table_field' },
                    ],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'item_title', type: 'table_field' },
                        { field: 'category', type: 'table_field' },
                        { field: 'brand', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'colour', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'description', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Location and Time',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'last_seen_location', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'last_seen_date', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Status',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'state', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

