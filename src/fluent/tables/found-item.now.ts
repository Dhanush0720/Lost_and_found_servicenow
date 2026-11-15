import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, MultiLineTextColumn, ReferenceColumn, DateTimeColumn } from '@servicenow/sdk/core'

export const x_1526023_lost_and_found_item = Table({
    name: 'x_1526023_lost_and_found_item',
    label: 'Found Item',
    isExtensible: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'FOUND',
        number: 1000,
        numberOfDigits: 7,
    },
    schema: {
        number: StringColumn({
            label: 'Number',
            default: 'javascript:global.getNextObjNumberPadded();',
        }),
        logged_by: ReferenceColumn({
            label: 'Logged by',
            referenceTable: 'sys_user',
            default: 'javascript:gs.getUserID()',
        }),
        item_title: StringColumn({
            label: 'Item title',
            mandatory: true,
            maxLength: 200,
        }),
        category: ChoiceColumn({
            label: 'Category',
            mandatory: true,
            choices: {
                id_card: { label: 'ID Card', value: 'id_card' },
                laptop: { label: 'Laptop', value: 'laptop' },
                wallet: { label: 'Wallet', value: 'wallet' },
                book: { label: 'Book', value: 'book' },
                accessory: { label: 'Accessory', value: 'accessory' },
                phone: { label: 'Phone', value: 'phone' },
                keys: { label: 'Keys', value: 'keys' },
                bag: { label: 'Bag', value: 'bag' },
                other: { label: 'Other', value: 'other' },
            },
            dropdown: 'dropdown_with_none',
        }),
        brand: StringColumn({
            label: 'Brand',
            maxLength: 100,
        }),
        colour: StringColumn({
            label: 'Colour',
            maxLength: 50,
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 4000,
        }),
        found_location: ReferenceColumn({
            label: 'Found location',
            referenceTable: 'x_1526023_lost_and_location',
        }),
        found_date: DateTimeColumn({
            label: 'Found date',
        }),
        storage_location: StringColumn({
            label: 'Storage location',
            maxLength: 200,
        }),
        state: ChoiceColumn({
            label: 'State',
            default: 'stored',
            choices: {
                stored: { label: 'Stored', value: 'stored' },
                matched: { label: 'Matched', value: 'matched' },
                handover_pending: { label: 'Handover pending', value: 'handover_pending' },
                returned: { label: 'Returned', value: 'returned' },
                closed: { label: 'Closed', value: 'closed' },
            },
            dropdown: 'dropdown_with_none',
        }),
    },
})

