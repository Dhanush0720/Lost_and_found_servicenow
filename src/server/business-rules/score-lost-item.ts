import { GlideRecord, gs } from '@servicenow/glide'
import { computeMatchScore, getBand, upsertMatchSuggestion } from './scoring-engine.ts'

/**
 * After insert on Lost Item: score against all Stored Found Items of the same category.
 */
export function scoreLostItemOnInsert(current: any, previous: any): void {
    var lostCategory = current.getValue('category')
    if (!lostCategory) return

    var found = new GlideRecord('x_1526023_lost_and_found_item')
    found.addQuery('category', lostCategory)
    found.addQuery('state', 'stored')
    found.query()

    while (found.next()) {
        var result = computeMatchScore(current, found)
        if (result.score >= 30) {
            var band = getBand(result.score)
            upsertMatchSuggestion(
                current.getUniqueValue(),
                found.getUniqueValue(),
                result.score,
                band,
                result.breakdown
            )
        }
    }
}

