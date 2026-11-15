import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { scoreLostItemOnInsert } from '../../server/business-rules/score-lost-item'

export const ScoreLostItemOnInsert = BusinessRule({
    $id: Now.ID['br_score_lost_item'],
    name: 'Score Lost Item Against Found Items',
    table: 'x_1526023_lost_and_lost_item',
    when: 'after',
    action: ['insert'],
    order: 200,
    description: 'After a Lost Item is created, score it against all Stored Found Items of the same category',
    script: scoreLostItemOnInsert,
})

