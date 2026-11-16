(function() {
    data.appName = "Campus Property Administration";
    data.appTitle = "Lost & Found Campus Portal";
    data.userId = gs.getUserID();
    data.userName = gs.getUserDisplayName();
    data.isAdmin = gs.hasRole('x_1526023_lost_and.lost_found_admin') || gs.hasRole('admin');
    data.deskPhoneNumber = gs.getProperty('x_1526023_lost_and.desk_phone_number', '919493698980');

    // Handle Actions from Client
    if (input) {
        // 3-Click Quick Hand-In
        if (input.action === 'quick_handin') {
            var grQuick = new GlideRecord('x_1526023_lost_and_found_item');
            grQuick.initialize();
            var itemTitle = input.category_title || ('Found ' + input.category);
            if (input.note) {
                itemTitle += ' (' + input.note.substring(0, 40) + ')';
            }
            grQuick.setValue('item_title', itemTitle);
            grQuick.setValue('category', input.category);
            
            var desc = "3-Click Quick Hand-In\n";
            desc += "Drop Desk: " + (input.drop_desk || 'Campus Desk') + "\n";
            if (input.note) desc += "Finder Note: " + input.note + "\n";
            if (input.photo_data) desc += "[Photo recorded at hand-in]\n";
            grQuick.setValue('description', desc);

            // Match location if given
            if (input.location_name) {
                var grLMatch = new GlideRecord('x_1526023_lost_and_location');
                if (grLMatch.get('name', input.location_name)) {
                    grQuick.setValue('found_location', grLMatch.getUniqueValue());
                }
            }
            grQuick.setValue('storage_location', input.drop_desk || 'Lost and Found Office');
            grQuick.setValue('logged_by', gs.getUserID());
            grQuick.setValue('state', 'stored');
            var quickSysId = grQuick.insert();

            // Save Photo as Attachment if provided
            if (input.photo_data && quickSysId) {
                try {
                    var sa = new GlideSysAttachment();
                    var base64Str = input.photo_data.indexOf(',') !== -1 ? input.photo_data.split(',')[1] : input.photo_data;
                    sa.writeBase64(grQuick, 'item_photo.jpg', 'image/jpeg', base64Str);
                } catch(e) {}
            }

            data.message = "Item successfully registered in desk custody. AI match engine notified.";
            data.messageType = "success";
        }

        // WhatsApp / Bot Inbound Webhook Handler
        if (input.action === 'whatsapp_inbound') {
            var grBot = new GlideRecord('x_1526023_lost_and_found_item');
            grBot.initialize();
            grBot.setValue('item_title', input.item_title || ('WhatsApp Report: ' + (input.category || 'Item')));
            grBot.setValue('category', input.category || 'other');
            var botDesc = "Automated WhatsApp Bot Report\nSender: " + (input.sender || 'Student') + "\nMessage: " + (input.text || '');
            grBot.setValue('description', botDesc);
            grBot.setValue('storage_location', input.storage_location || 'Campus Security Desk');
            grBot.setValue('state', 'stored');
            var botId = grBot.insert();
            data.message = "WhatsApp report logged successfully";
            data.recordId = botId;
        }

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

    // Empathy Helper Definition
    function getEmpathyNotice(category) {
        if (category === 'id_card') return "Needed for student exam entry and hostel gate verification.";
        if (category === 'keys') return "Classmate may be locked out of their hostel room.";
        if (category === 'wallet') return "Contains student ID, payment cards, and cash at risk.";
        if (category === 'phone') return "Essential for student communication, classes, and family contacts.";
        if (category === 'laptop') return "Contains coursework, academic projects, and assignments.";
        return "";
    }

    // Found Items (Stored / Available)
    data.foundItems = [];
    var grF = new GlideRecord('x_1526023_lost_and_found_item');
    grF.orderByDesc('sys_created_on');
    grF.setLimit(50);
    grF.query();
    while (grF.next()) {
        var fCat = grF.getValue('category');
        var fEmpathy = getEmpathyNotice(fCat);
        data.foundItems.push({
            sys_id: grF.getUniqueValue(),
            number: grF.getValue('number') || '',
            item_title: grF.getValue('item_title'),
            category: grF.getDisplayValue('category'),
            category_val: fCat,
            brand: grF.getValue('brand') || '',
            colour: grF.getValue('colour') || '',
            description: grF.getValue('description') || '',
            found_location: grF.getDisplayValue('found_location') || 'Campus',
            found_date: grF.getDisplayValue('found_date') || '',
            storage_location: grF.getValue('storage_location') || '',
            state: grF.getDisplayValue('state'),
            state_val: grF.getValue('state'),
            empathy_notice: fEmpathy,
            is_high_value: !!fEmpathy
        });
    }

    // Lost Items
    data.lostItems = [];
    var grL = new GlideRecord('x_1526023_lost_and_lost_item');
    grL.orderByDesc('sys_created_on');
    grL.setLimit(50);
    grL.query();
    while (grL.next()) {
        var lCat = grL.getValue('category');
        var lEmpathy = getEmpathyNotice(lCat);
        data.lostItems.push({
            sys_id: grL.getUniqueValue(),
            number: grL.getValue('number') || '',
            item_title: grL.getValue('item_title'),
            category: grL.getDisplayValue('category'),
            category_val: lCat,
            brand: grL.getValue('brand') || '',
            colour: grL.getValue('colour') || '',
            description: grL.getValue('description') || '',
            last_seen_location: grL.getDisplayValue('last_seen_location') || 'Campus',
            last_seen_date: grL.getDisplayValue('last_seen_date') || '',
            state: grL.getDisplayValue('state'),
            state_val: grL.getValue('state'),
            reporter: grL.getDisplayValue('reporter'),
            empathy_notice: lEmpathy,
            is_high_value: !!lEmpathy
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

    // Claims
    data.myClaims = [];
    var grC = new GlideRecord('x_1526023_lost_and_claim');
    grC.orderByDesc('sys_created_on');
    grC.setLimit(50);
    grC.query();
    while (grC.next()) {
        data.myClaims.push({
            sys_id: grC.getUniqueValue(),
            number: grC.getValue('number') || '',
            lost_item: grC.getDisplayValue('lost_item'),
            found_item: grC.getDisplayValue('found_item'),
            claimant: grC.getDisplayValue('claimant'),
            verification_state: grC.getDisplayValue('verification_state'),
            verification_state_val: grC.getValue('verification_state'),
            proof: grC.getValue('proof_of_ownership') || ''
        });
    }

    // High Level Metrics
    data.stats = {
        storedFound: data.foundItems.filter(function(i) { return i.state_val === 'stored'; }).length,
        openLost: data.lostItems.filter(function(i) { return i.state_val === 'open'; }).length,
        matches: data.matches.filter(function(m) { return m.status === 'suggested'; }).length,
        claims: data.myClaims.length
    };
})();
