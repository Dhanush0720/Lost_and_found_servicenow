api.controller = function($scope, spUtil) {
    var c = this;

    c.activeTab = 'found';
    c.reportMode = 'lost';
    c.searchQuery = '';
    c.selectedCategory = '';

    c.categories = [
        { label: 'All', value: '' },
        { label: 'ID Card', value: 'id_card' },
        { label: 'Laptop', value: 'laptop' },
        { label: 'Wallet', value: 'wallet' },
        { label: 'Phone', value: 'phone' },
        { label: 'Keys', value: 'keys' },
        { label: 'Book', value: 'book' },
        { label: 'Bag', value: 'bag' },
        { label: 'Accessory', value: 'accessory' },
        { label: 'Other', value: 'other' }
    ];

    c.newReport = {
        item_title: '',
        category: 'id_card',
        brand: '',
        colour: '',
        description: '',
        location: '',
        date: '',
        storage_location: 'Lost and Found Office'
    };

    c.claimModalOpen = false;
    c.claimData = {
        lost_item_id: '',
        found_item_id: '',
        found_item_title: '',
        proof_of_ownership: ''
    };

    c.setTab = function(tab) {
        c.activeTab = tab;
    };

    c.setCategory = function(cat) {
        c.selectedCategory = cat;
    };

    c.filterItems = function(item) {
        if (c.selectedCategory && item.category_val !== c.selectedCategory) {
            return false;
        }
        if (c.searchQuery) {
            var q = c.searchQuery.toLowerCase();
            var title = (item.item_title || '').toLowerCase();
            var brand = (item.brand || '').toLowerCase();
            var colour = (item.colour || '').toLowerCase();
            var desc = (item.description || '').toLowerCase();
            var loc = (item.found_location || item.last_seen_location || '').toLowerCase();
            return title.indexOf(q) !== -1 || brand.indexOf(q) !== -1 || colour.indexOf(q) !== -1 || desc.indexOf(q) !== -1 || loc.indexOf(q) !== -1;
        }
        return true;
    };

    c.submitReport = function() {
        if (!c.newReport.item_title) {
            spUtil.addErrorMessage('Item title is required');
            return;
        }
        c.loading = true;
        var actionName = c.reportMode === 'lost' ? 'report_lost' : 'log_found';
        var payload = {
            action: actionName,
            item_title: c.newReport.item_title,
            category: c.newReport.category,
            brand: c.newReport.brand,
            colour: c.newReport.colour,
            description: c.newReport.description
        };
        if (c.reportMode === 'lost') {
            payload.last_seen_location = c.newReport.location;
            payload.last_seen_date = c.newReport.date;
        } else {
            payload.found_location = c.newReport.location;
            payload.found_date = c.newReport.date;
            payload.storage_location = c.newReport.storage_location;
        }

        c.server.get(payload).then(function(response) {
            c.loading = false;
            c.data = response.data;
            spUtil.addInfoMessage(response.data.message || 'Report submitted');
            c.newReport.item_title = '';
            c.newReport.brand = '';
            c.newReport.colour = '';
            c.newReport.description = '';
            c.activeTab = c.reportMode === 'lost' ? 'lost' : 'found';
        });
    };

    c.openClaimModal = function(foundItem) {
        c.claimData.found_item_id = foundItem.sys_id;
        c.claimData.found_item_title = foundItem.item_title;
        var matchingLost = (c.data.lostItems || []).filter(function(l) {
            return l.category_val === foundItem.category_val;
        });
        if (matchingLost.length > 0) {
            c.claimData.lost_item_id = matchingLost[0].sys_id;
        } else if (c.data.lostItems.length > 0) {
            c.claimData.lost_item_id = c.data.lostItems[0].sys_id;
        }
        c.claimData.proof_of_ownership = '';
        c.claimModalOpen = true;
    };

    c.closeClaimModal = function() {
        c.claimModalOpen = false;
    };

    c.submitClaim = function() {
        if (!c.claimData.lost_item_id) {
            spUtil.addErrorMessage('Select the corresponding lost item report');
            return;
        }
        if (!c.claimData.proof_of_ownership) {
            spUtil.addErrorMessage('Proof of ownership details are required');
            return;
        }
        c.loading = true;
        c.server.get({
            action: 'submit_claim',
            lost_item_id: c.claimData.lost_item_id,
            found_item_id: c.claimData.found_item_id,
            proof_of_ownership: c.claimData.proof_of_ownership
        }).then(function(response) {
            c.loading = false;
            c.data = response.data;
            c.claimModalOpen = false;
            spUtil.addInfoMessage(response.data.message || 'Claim submitted');
            c.activeTab = 'claims';
        });
    };

    c.updateMatch = function(match, newStatus) {
        c.server.get({
            action: 'update_match_status',
            match_id: match.sys_id,
            status: newStatus
        }).then(function(response) {
            c.data = response.data;
            spUtil.addInfoMessage(response.data.message || 'Status updated');
        });
    };
};
