import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_1526023_lost_and_match',
    view: default_view,
    sections: [
        {
            caption: 'Match Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'lost_item', type: 'table_field' },
                        { field: 'confidence_score', type: 'table_field' },
                        { field: 'status', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'found_item', type: 'table_field' },
                        { field: 'band', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'score_breakdown', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

