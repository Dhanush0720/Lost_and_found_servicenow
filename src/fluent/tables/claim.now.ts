import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, MultiLineTextColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_1526023_lost_and_claim = Table({
    name: 'x_1526023_lost_and_claim',
    label: 'Claim',
    isExtensible: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'CLM',
        number: 1000,
        numberOfDigits: 7,
    },
    schema: {
        number: StringColumn({
            label: 'Number',
            default: 'javascript:global.getNextObjNumberPadded();',
        }),
        lost_item: ReferenceColumn({
            label: 'Lost item',
            referenceTable: 'x_1526023_lost_and_lost_item',
            mandatory: true,
        }),
        found_item: ReferenceColumn({
            label: 'Found item',
            referenceTable: 'x_1526023_lost_and_found_item',
            mandatory: true,
        }),
        claimant: ReferenceColumn({
            label: 'Claimant',
            referenceTable: 'sys_user',
            default: 'javascript:gs.getUserID()',
        }),
        proof_of_ownership: MultiLineTextColumn({
            label: 'Proof of ownership',
            mandatory: true,
            maxLength: 4000,
        }),
        verification_state: ChoiceColumn({
            label: 'Verification state',
            default: 'submitted',
            choices: {
                submitted: { label: 'Submitted', value: 'submitted' },
                approved: { label: 'Approved', value: 'approved' },
                rejected: { label: 'Rejected', value: 'rejected' },
                completed: { label: 'Completed', value: 'completed' },
            },
            dropdown: 'dropdown_with_none',
        }),
        approver: ReferenceColumn({
            label: 'Approver',
            referenceTable: 'sys_user',
        }),
    },
})

