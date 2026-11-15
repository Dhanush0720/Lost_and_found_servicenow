(function() {
    data.appName = "Campus Property Administration";
    data.appTitle = "Lost & Found Campus Portal";
    data.userId = gs.getUserID();
    data.userName = gs.getUserDisplayName();
    data.isAdmin = gs.hasRole('x_1526023_lost_and.lost_found_admin') || gs.hasRole('admin');

    // Handle Actions from Client
    if (input) {
        if (input.action === 'report_lost') {
            var grLost = new GlideRecord('x_1526023_lost_and_lost_item');
            grLost.initialize();
            grLost.setValue('item_title', input.item_title);
            grLost.setValue('category', input.category);
            grLost.setValue('brand', input.brand || '');
            grLost.setValue('colour', input.colour || '');
            grLost.setValue('description', input.description || '');
            if (input.last_seen_location) grLost.setValue('last_seen_location', input.last_seen_location);
            if (input.last_seen_date) grLost.setValue('last_seen_date', input.last_seen_date);
            grLost.setValue('reporter', gs.getUserID());
            grLost.setValue('state', 'open');
            var lostSysId = grLost.insert();
            data.message = "Lost property report filed";
            data.messageType = "success";
        }

        if (input.action === 'log_found') {
            var grFound = new GlideRecord('x_1526023_lost_and_found_item');
            grFound.initialize();
            grFound.setValue('item_title', input.item_title);
            grFound.setValue('category', input.category);
            grFound.setValue('brand', input.brand || '');
            grFound.setValue('colour', input.colour || '');
            grFound.setValue('description', input.description || '');
            if (input.found_location) grFound.setValue('found_location', input.found_location);
            if (input.found_date) grFound.setValue('found_date', input.found_date);
            grFound.setValue('storage_location', input.storage_location || 'Lost and Found Office');
            grFound.setValue('logged_by', gs.getUserID());
            grFound.setValue('state', 'stored');
            var foundSysId = grFound.insert();
            data.message = "Item recorded in desk custody";
            data.messageType = "success";
        }

        if (input.action === 'submit_claim') {
            var grClaim = new GlideRecord('x_1526023_lost_and_claim');
            grClaim.initialize();
            grClaim.setValue('lost_item', input.lost_item_id);
            grClaim.setValue('found_item', input.found_item_id);
            grClaim.setValue('proof_of_ownership', input.proof_of_ownership);
            grClaim.setValue('claimant', gs.getUserID());
            grClaim.setValue('verification_state', 'submitted');
            var claimSysId = grClaim.insert();
            data.message = "Ownership claim submitted for review";
            data.messageType = "success";
        }

        if (input.action === 'update_match_status') {
            var grMatch = new GlideRecord('x_1526023_lost_and_match');
            if (grMatch.get(input.match_id)) {
                grMatch.setValue('status', input.status);
                grMatch.update();
                data.message = "Match suggestion marked as " + input.status;
                data.messageType = "success";
            }
        }
    }

    // Refresh Data for Presentation
    // Locations
    data.locations = [];
    var grLoc = new GlideRecord('x_1526023_lost_and_location');
    grLoc.orderBy('name');
    grLoc.query();
    while (grLoc.next()) {
        data.locations.push({
            sys_id: grLoc.getUniqueValue(),
            name: grLoc.getValue('name'),
            building: grLoc.getValue('building') || '',
            campus_zone: grLoc.getValue('campus_zone') || ''
        });
    }

    // Found Items (Stored / Available)
    data.foundItems = [];
    var grF = new GlideRecord('x_1526023_lost_and_found_item');
    grF.orderByDesc('sys_created_on');
    grF.setLimit(50);
    grF.query();
    while (grF.next()) {
        data.foundItems.push({
            sys_id: grF.getUniqueValue(),
            number: grF.getValue('number') || '',
            item_title: grF.getValue('item_title'),
            category: grF.getDisplayValue('category'),
            category_val: grF.getValue('category'),
            brand: grF.getValue('brand') || '',
            colour: grF.getValue('colour') || '',
            description: grF.getValue('description') || '',
            found_location: grF.getDisplayValue('found_location') || 'Campus',
            found_date: grF.getDisplayValue('found_date') || '',
            storage_location: grF.getValue('storage_location') || '',
            state: grF.getDisplayValue('state'),
            state_val: grF.getValue('state')
        });
    }

    // Lost Items
    data.lostItems = [];
    var grL = new GlideRecord('x_1526023_lost_and_lost_item');
    grL.orderByDesc('sys_created_on');
    grL.setLimit(50);
    grL.query();
    while (grL.next()) {
        data.lostItems.push({
            sys_id: grL.getUniqueValue(),
            number: grL.getValue('number') || '',
            item_title: grL.getValue('item_title'),
            category: grL.getDisplayValue('category'),
            category_val: grL.getValue('category'),
            brand: grL.getValue('brand') || '',
            colour: grL.getValue('colour') || '',
            description: grL.getValue('description') || '',
            last_seen_location: grL.getDisplayValue('last_seen_location') || 'Campus',
            last_seen_date: grL.getDisplayValue('last_seen_date') || '',
            state: grL.getDisplayValue('state'),
            state_val: grL.getValue('state'),
            reporter: grL.getDisplayValue('reporter')
        });
    }

    // Match Suggestions
    data.matches = [];
    var grM = new GlideRecord('x_1526023_lost_and_match');
    grM.orderByDesc('confidence_score');
    grM.setLimit(50);
    grM.query();
    while (grM.next()) {
        var breakdownObj = {};
        try {
            breakdownObj = JSON.parse(grM.getValue('score_breakdown') || '{}');
        } catch(e) {}
        data.matches.push({
            sys_id: grM.getUniqueValue(),
            lost_item_id: grM.getValue('lost_item'),
            lost_item_title: grM.getDisplayValue('lost_item'),
            found_item_id: grM.getValue('found_item'),
            found_item_title: grM.getDisplayValue('found_item'),
            confidence_score: parseInt(grM.getValue('confidence_score') || 0),
            band: grM.getValue('band') || 'low',
            status: grM.getValue('status') || 'suggested',
            status_dv: grM.getDisplayValue('status'),
            breakdown: breakdownObj
        });
    }

    // User's claims
    data.myClaims = [];
    var grC = new GlideRecord('x_1526023_lost_and_claim');
    if (!data.isAdmin) {
        grC.addQuery('claimant', gs.getUserID());
    }
    grC.orderByDesc('sys_created_on');
    grC.setLimit(25);
    grC.query();
    while (grC.next()) {
        data.myClaims.push({
            sys_id: grC.getUniqueValue(),
            number: grC.getValue('number') || '',
            lost_item_title: grC.getDisplayValue('lost_item'),
            found_item_title: grC.getDisplayValue('found_item'),
            verification_state: grC.getDisplayValue('verification_state'),
            verification_state_val: grC.getValue('verification_state'),
            claimant: grC.getDisplayValue('claimant'),
            proof: grC.getValue('proof_of_ownership')
        });
    }

    // Counts for stats header
    data.stats = {
        openLost: data.lostItems.filter(function(i) { return i.state_val === 'open'; }).length,
        storedFound: data.foundItems.filter(function(i) { return i.state_val === 'stored'; }).length,
        matches: data.matches.length,
        claims: data.myClaims.length
    };
})();
