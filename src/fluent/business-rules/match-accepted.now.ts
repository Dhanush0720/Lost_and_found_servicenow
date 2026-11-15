import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { onMatchAccepted } from '../../server/business-rules/match-accepted'

export const MatchSuggestionAccepted = BusinessRule({
    $id: Now.ID['br_match_accepted'],
    name: 'Match Suggestion Accepted',
    table: 'x_1526023_lost_and_match',
    when: 'after',
    action: ['update'],
    order: 200,
    filterCondition: 'statusCHANGESTO accepted',
    description: 'When a match is accepted, set both items to Matched and reject other open suggestions',
    script: onMatchAccepted,
})

