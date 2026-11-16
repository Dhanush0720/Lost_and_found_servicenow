import { GlideRecord, GlideDateTime, gs } from '@servicenow/glide'
import { computeMatchScore, getBand, upsertMatchSuggestion } from './scoring-engine'

/**
 * After insert on Found Item:
 * 1. Add Custody Log entries (Received, plus Stored if storage location is set)
 * 2. Score against all Open Lost Items of the same category
 */
export function processFoundItemOnInsert(current: any, previous: any): void {
    var foundSysId = current.getUniqueValue()
    var now = new GlideDateTime()

    // --- Custody Log: Received ---
    var logReceived = new GlideRecord('x_1526023_lost_and_custody_log')
    logReceived.initialize()
    logReceived.setValue('found_item', foundSysId)
    logReceived.setValue('event', 'received')
    logReceived.setValue('handled_by', gs.getUserID())
    logReceived.setValue('timestamp', now)
    logReceived.setValue('notes', 'Item received and logged')
    logReceived.insert()

    // --- Custody Log: Stored (if storage location is set) ---
    var storageLoc = current.getValue('storage_location')
    if (storageLoc) {
        var logStored = new GlideRecord('x_1526023_lost_and_custody_log')
        logStored.initialize()
        logStored.setValue('found_item', foundSysId)
        logStored.setValue('event', 'stored')
        logStored.setValue('handled_by', gs.getUserID())
        logStored.setValue('timestamp', now)
        logStored.setValue('notes', 'Stored at: ' + storageLoc)
        logStored.insert()
    }

    // --- Score against Open Lost Items ---
    var foundCategory = current.getValue('category')
    if (!foundCategory) return

    var lost = new GlideRecord('x_1526023_lost_and_lost_item')
    lost.addQuery('category', foundCategory)
    lost.addQuery('state', 'open')
    lost.query()

    while (lost.next()) {
        var result = computeMatchScore(lost, current)
        if (result.score >= 30) {
            var band = getBand(result.score)
            upsertMatchSuggestion(
                lost.getUniqueValue(),
                foundSysId,
                result.score,
                band,
                result.breakdown
            )
        }
    }
}
