import '@servicenow/sdk/global'
import { UiPolicy } from '@servicenow/sdk/core'

/**
 * On Found Item, when State is Returned, make Storage location read-only.
 */
export const FoundItemReturnedReadOnly = UiPolicy({
    $id: Now.ID['uip_found_returned_storage'],
    table: 'x_1526023_lost_and_found_item',
    shortDescription: 'Make Storage location read-only when Found Item is Returned',
    conditions: 'state=returned',
    onLoad: true,
    reverseIfFalse: true,
    actions: [
        {
            field: 'storage_location',
            readOnly: true,
            visible: 'ignore',
            mandatory: 'ignore',
        },
    ],
})

