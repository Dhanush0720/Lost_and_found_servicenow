import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { onClaimStateChange } from '../../server/business-rules/claim-state-change'

export const ClaimStateChange = BusinessRule({
    $id: Now.ID['br_claim_state_change'],
    name: 'Claim Verification State Change',
    table: 'x_1526023_lost_and_claim',
    when: 'after',
    action: ['update'],
    order: 200,
    filterCondition: 'verification_stateVALCHANGES',
    description: 'Handle claim state transitions: Approved, Completed, Rejected',
    script: onClaimStateChange,
})

