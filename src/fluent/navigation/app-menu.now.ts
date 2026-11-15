import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

// Application Menu
const lostAndFoundMenu = ApplicationMenu({
    $id: Now.ID['lost_and_found_menu'],
    title: 'Lost and Found',
    hint: 'Lost and Found management for Ramachandra College of Engineering',
    description: 'Report lost items, log found items, manage matches and claims',
    active: true,
})

// Module: Lost Items
Record({
    $id: Now.ID['module_lost_items'],
    table: 'sys_app_module',
    data: {
        title: 'Lost Items',
        application: lostAndFoundMenu,
        link_type: 'LIST',
        name: 'x_1526023_lost_and_lost_item',
        hint: 'View all lost item reports',
        active: true,
        order: 100,
    },
})

// Module: Found Items
Record({
    $id: Now.ID['module_found_items'],
    table: 'sys_app_module',
    data: {
        title: 'Found Items',
        application: lostAndFoundMenu,
        link_type: 'LIST',
        name: 'x_1526023_lost_and_found_item',
        hint: 'View all found item records',
        active: true,
        order: 200,
    },
})

// Module: Match Suggestions
Record({
    $id: Now.ID['module_match_suggestions'],
    table: 'sys_app_module',
    data: {
        title: 'Match Suggestions',
        application: lostAndFoundMenu,
        link_type: 'LIST',
        name: 'x_1526023_lost_and_match',
        hint: 'View match suggestions between lost and found items',
        active: true,
        order: 300,
    },
})

// Module: Claims
Record({
    $id: Now.ID['module_claims'],
    table: 'sys_app_module',
    data: {
        title: 'Claims',
        application: lostAndFoundMenu,
        link_type: 'LIST',
        name: 'x_1526023_lost_and_claim',
        hint: 'View all claims',
        active: true,
        order: 400,
    },
})

// Module: Custody Log
Record({
    $id: Now.ID['module_custody_log'],
    table: 'sys_app_module',
    data: {
        title: 'Custody Log',
        application: lostAndFoundMenu,
        link_type: 'LIST',
        name: 'x_1526023_lost_and_custody_log',
        hint: 'View custody log entries',
        active: true,
        order: 500,
    },
})

// Module: Locations
Record({
    $id: Now.ID['module_locations'],
    table: 'sys_app_module',
    data: {
        title: 'Locations',
        application: lostAndFoundMenu,
        link_type: 'LIST',
        name: 'x_1526023_lost_and_location',
        hint: 'View campus locations',
        active: true,
        order: 600,
    },
})

// Module: Lost & Found Portal (Self-Service)
Record({
    $id: Now.ID['module_portal'],
    table: 'sys_app_module',
    data: {
        title: 'Lost & Found Portal',
        application: lostAndFoundMenu,
        link_type: 'DIRECT',
        query: 'rce_lost_found',
        hint: 'Open modern self-service portal for students and staff',
        active: true,
        order: 50,
    },
})


