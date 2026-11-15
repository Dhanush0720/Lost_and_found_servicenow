import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_1526023_lost_and_claim',
    view: default_view,
    sections: [
        {
            caption: 'Claim Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'number', type: 'table_field' },
                    ],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'lost_item', type: 'table_field' },
                        { field: 'claimant', type: 'table_field' },
                        { field: 'verification_state', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'found_item', type: 'table_field' },
                        { field: 'approver', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'proof_of_ownership', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

