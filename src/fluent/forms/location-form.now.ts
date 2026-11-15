import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_1526023_lost_and_location',
    view: default_view,
    sections: [
        {
            caption: 'Location Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'name', type: 'table_field' },
                        { field: 'building', type: 'table_field' },
                        { field: 'campus_zone', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

