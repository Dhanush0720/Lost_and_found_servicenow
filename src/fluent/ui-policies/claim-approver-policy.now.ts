import '@servicenow/sdk/global'
import { UiPolicy } from '@servicenow/sdk/core'

/**
 * On Claim, when Verification state is Approved, show Approver and make it mandatory.
 */
export const ClaimApprovedShowApprover = UiPolicy({
    $id: Now.ID['uip_claim_approver'],
    table: 'x_1526023_lost_and_claim',
    shortDescription: 'Show and require Approver when Claim is Approved',
    conditions: 'verification_state=approved',
    onLoad: true,
    reverseIfFalse: true,
    actions: [
        {
            field: 'approver',
            visible: true,
            mandatory: true,
            readOnly: 'ignore',
        },
    ],
})

