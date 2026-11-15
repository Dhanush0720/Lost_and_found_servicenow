import { GlideRecord, GlideDateTime, gs } from '@servicenow/glide'

/**
 * Handle Claim state transitions:
 * - Approved: Set Found Item to "Handover pending", add Custody Log entry (Released), create handover task
 * - Completed: Set both items to "Returned", add Custody Log entry (Returned)
 * - Rejected: Set Found Item back to "Stored"
 */
export function onClaimStateChange(current: any, previous: any): void {
    var newState = current.getValue('verification_state')
    var oldState = previous.getValue('verification_state')

    if (newState === oldState) return

    var foundId = current.getValue('found_item')
    var lostId = current.getValue('lost_item')
    var now = new GlideDateTime()

    if (newState === 'approved') {
        // Set Found Item to Handover pending
        var foundItem = new GlideRecord('x_1526023_lost_and_found_item')
        if (foundItem.get(foundId)) {
            foundItem.setValue('state', 'handover_pending')
            foundItem.update()
        }

        // Add Custody Log entry (Released)
        var logReleased = new GlideRecord('x_1526023_lost_and_custody_log')
        logReleased.initialize()
        logReleased.setValue('found_item', foundId)
        logReleased.setValue('event', 'released')
        logReleased.setValue('handled_by', gs.getUserID())
        logReleased.setValue('timestamp', now)
        logReleased.setValue('notes', 'Released for handover - Claim ' + current.getValue('number'))
        logReleased.insert()

        // Create a handover task
        var task = new GlideRecord('task')
        task.initialize()
        task.setValue('short_description', 'Handover: ' + current.getValue('number'))
        task.setValue('description', 'Hand over the found item to the claimant. Claim: ' + current.getValue('number'))
        task.setValue('assigned_to', current.getValue('approver'))
        task.insert()
    }

    if (newState === 'completed') {
        // Set both items to Returned
        var lostItem = new GlideRecord('x_1526023_lost_and_lost_item')
        if (lostItem.get(lostId)) {
            lostItem.setValue('state', 'returned')
            lostItem.update()
        }

        var foundItemRet = new GlideRecord('x_1526023_lost_and_found_item')
        if (foundItemRet.get(foundId)) {
            foundItemRet.setValue('state', 'returned')
            foundItemRet.update()
        }

        // Add Custody Log entry (Returned)
        var logReturned = new GlideRecord('x_1526023_lost_and_custody_log')
        logReturned.initialize()
        logReturned.setValue('found_item', foundId)
        logReturned.setValue('event', 'returned')
        logReturned.setValue('handled_by', gs.getUserID())
        logReturned.setValue('timestamp', now)
        logReturned.setValue('notes', 'Returned to owner - Claim ' + current.getValue('number'))
        logReturned.insert()
    }

    if (newState === 'rejected') {
        // Set Found Item back to Stored
        var foundItemBack = new GlideRecord('x_1526023_lost_and_found_item')
        if (foundItemBack.get(foundId)) {
            foundItemBack.setValue('state', 'stored')
            foundItemBack.update()
        }
    }
}

