import { GlideRecord, GlideDateTime, gs } from '@servicenow/glide'

/**
 * Scoring engine: compares a lost item against a found item.
 * Weights total 100:
 *   description similarity 30, category 20, brand 15, colour 15, location 10, date 10
 * Missing brand or colour => a third of the weight.
 * Returns score and breakdown JSON.
 */
export function computeMatchScore(lost: GlideRecord, found: GlideRecord): { score: number; breakdown: Record<string, number> } {
    var breakdown: Record<string, number> = {}
    var total = 0

    // --- Category (20) ---
    var lostCat = lost.getValue('category') || ''
    var foundCat = found.getValue('category') || ''
    if (lostCat && foundCat && lostCat === foundCat) {
        breakdown['category'] = 20
        total += 20
    } else {
        breakdown['category'] = 0
    }

    // --- Brand (15) ---
    var lostBrand = (lost.getValue('brand') || '').toLowerCase().trim()
    var foundBrand = (found.getValue('brand') || '').toLowerCase().trim()
    if (!lostBrand || !foundBrand) {
        breakdown['brand'] = 5 // one third of 15
        total += 5
    } else if (lostBrand === foundBrand) {
        breakdown['brand'] = 15
        total += 15
    } else {
        breakdown['brand'] = 0
    }

    // --- Colour (15) ---
    var lostColour = (lost.getValue('colour') || '').toLowerCase().trim()
    var foundColour = (found.getValue('colour') || '').toLowerCase().trim()
    if (!lostColour || !foundColour) {
        breakdown['colour'] = 5 // one third of 15
        total += 5
    } else if (lostColour === foundColour) {
        breakdown['colour'] = 15
        total += 15
    } else {
        breakdown['colour'] = 0
    }

    // --- Location (10) ---
    var lostLoc = lost.getValue('last_seen_location') || ''
    var foundLoc = found.getValue('found_location') || ''
    if (lostLoc && foundLoc && lostLoc === foundLoc) {
        breakdown['location'] = 10
        total += 10
    } else {
        breakdown['location'] = 0
    }

    // --- Date proximity (10) ---
    var lostDateStr = lost.getValue('last_seen_date') || ''
    var foundDateStr = found.getValue('found_date') || ''
    if (lostDateStr && foundDateStr) {
        var lostDate = new GlideDateTime(lostDateStr)
        var foundDate = new GlideDateTime(foundDateStr)
        var diffMs = Math.abs(
            parseInt(lostDate.getNumericValue() as any) -
            parseInt(foundDate.getNumericValue() as any)
        )
        var diffDays = diffMs / (1000 * 60 * 60 * 24)
        if (diffDays <= 1) {
            breakdown['date'] = 10
            total += 10
        } else if (diffDays <= 3) {
            breakdown['date'] = 7
            total += 7
        } else if (diffDays <= 7) {
            breakdown['date'] = 4
            total += 4
        } else {
            breakdown['date'] = 0
        }
    } else {
        breakdown['date'] = 0
    }

    // --- Description similarity (30) ---
    var lostDesc = (lost.getValue('description') || '').toLowerCase()
    var foundDesc = (found.getValue('description') || '').toLowerCase()
    if (lostDesc && foundDesc) {
        var lostWords = lostDesc.split(/\s+/)
        var foundWords = foundDesc.split(/\s+/)
        var matchCount = 0
        for (var i = 0; i < lostWords.length; i++) {
            if (lostWords[i].length > 2) {
                for (var j = 0; j < foundWords.length; j++) {
                    if (lostWords[i] === foundWords[j]) {
                        matchCount++
                        break
                    }
                }
            }
        }
        var significantWords = 0
        for (var k = 0; k < lostWords.length; k++) {
            if (lostWords[k].length > 2) significantWords++
        }
        if (significantWords > 0) {
            var ratio = matchCount / significantWords
            var descScore = Math.round(ratio * 30)
            breakdown['description'] = descScore
            total += descScore
        } else {
            breakdown['description'] = 0
        }
    } else {
        breakdown['description'] = 0
    }

    return { score: total, breakdown: breakdown }
}

/**
 * Determines the confidence band from a score.
 */
export function getBand(score: number): string {
    if (score >= 75) return 'high'
    if (score >= 50) return 'medium'
    return 'low'
}

/**
 * Creates or updates a match suggestion. Never overwrites Accepted or Rejected.
 */
export function upsertMatchSuggestion(
    lostSysId: string,
    foundSysId: string,
    score: number,
    band: string,
    breakdown: Record<string, number>
): void {
    // Check for existing suggestion
    var existing = new GlideRecord('x_1526023_lost_and_match')
    existing.addQuery('lost_item', lostSysId)
    existing.addQuery('found_item', foundSysId)
    existing.query()

    if (existing.next()) {
        var currentStatus = existing.getValue('status')
        if (currentStatus === 'accepted' || currentStatus === 'rejected') {
            return // Never overwrite accepted or rejected
        }
        existing.setValue('confidence_score', score)
        existing.setValue('band', band)
        existing.setValue('score_breakdown', JSON.stringify(breakdown))
        existing.setValue('status', 'suggested')
        existing.update()
    } else {
        var match = new GlideRecord('x_1526023_lost_and_match')
        match.initialize()
        match.setValue('lost_item', lostSysId)
        match.setValue('found_item', foundSysId)
        match.setValue('confidence_score', score)
        match.setValue('band', band)
        match.setValue('score_breakdown', JSON.stringify(breakdown))
        match.setValue('status', 'suggested')
        match.insert()
    }
}

