import '@servicenow/sdk/global'
import { Table, ReferenceColumn, IntegerColumn, ChoiceColumn, MultiLineTextColumn } from '@servicenow/sdk/core'

export const x_1526023_lost_and_match = Table({
    name: 'x_1526023_lost_and_match',
    label: 'Match Suggestion',
    isExtensible: false,
    allowWebServiceAccess: true,
    schema: {
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
        confidence_score: IntegerColumn({
            label: 'Confidence score',
            min: 0,
            max: 100,
        }),
        band: ChoiceColumn({
            label: 'Band',
            choices: {
                high: { label: 'High', value: 'high' },
                medium: { label: 'Medium', value: 'medium' },
                low: { label: 'Low', value: 'low' },
            },
            dropdown: 'dropdown_with_none',
        }),
        score_breakdown: MultiLineTextColumn({
            label: 'Score breakdown',
            maxLength: 4000,
        }),
        status: ChoiceColumn({
            label: 'Status',
            default: 'suggested',
            choices: {
                suggested: { label: 'Suggested', value: 'suggested' },
                accepted: { label: 'Accepted', value: 'accepted' },
                rejected: { label: 'Rejected', value: 'rejected' },
            },
            dropdown: 'dropdown_with_none',
        }),
    },
})

