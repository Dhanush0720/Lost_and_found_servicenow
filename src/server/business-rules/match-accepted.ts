import { GlideRecord, gs } from '@servicenow/glide'

/**
 * When a Match Suggestion becomes Accepted:
 * 1. Set both items to Matched
 * 2. Reject all other open (Suggested) suggestions for either item
 */
export function onMatchAccepted(current: any, previous: any): void {
    var newStatus = current.getValue('status')
    var oldStatus = previous.getValue('status')

    if (newStatus !== 'accepted' || oldStatus === 'accepted') return

    var lostId = current.getValue('lost_item')
    var foundId = current.getValue('found_item')

    // Set Lost Item to Matched
    var lostItem = new GlideRecord('x_1526023_lost_and_lost_item')
    if (lostItem.get(lostId)) {
        lostItem.setValue('state', 'matched')
        lostItem.update()
    }

    // Set Found Item to Matched
    var foundItem = new GlideRecord('x_1526023_lost_and_found_item')
    if (foundItem.get(foundId)) {
        foundItem.setValue('state', 'matched')
        foundItem.update()
    }

    // Reject other open suggestions for either item
    var otherSuggestions = new GlideRecord('x_1526023_lost_and_match')
    var qc = otherSuggestions.addQuery('lost_item', lostId)
    qc.addOrCondition('found_item', foundId)
    otherSuggestions.addQuery('status', 'suggested')
    otherSuggestions.addQuery('sys_id', '!=', current.getUniqueValue())
    otherSuggestions.query()

    while (otherSuggestions.next()) {
        otherSuggestions.setValue('status', 'rejected')
        otherSuggestions.update()
    }
}

