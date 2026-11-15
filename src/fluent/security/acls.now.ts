import '@servicenow/sdk/global'
import { Role, Acl } from '@servicenow/sdk/core'

// ──────────────────────────────────────────────────
// Role: lost_found_admin for desk staff
// ──────────────────────────────────────────────────
export const lostFoundAdmin = Role({
    name: 'x_1526023_lost_and.lost_found_admin',
    description: 'Lost and Found desk staff - full access to all Lost and Found tables',
})

// ════════════════════════════════════════════════════
// LOCATION — Everyone can read
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_location_read'],
    type: 'record',
    table: 'x_1526023_lost_and_location',
    operation: 'read',
    roles: [],
    adminOverrides: true,
    description: 'Everyone can read locations',
})

Acl({
    $id: Now.ID['acl_location_create'],
    type: 'record',
    table: 'x_1526023_lost_and_location',
    operation: 'create',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can create locations',
})

Acl({
    $id: Now.ID['acl_location_write'],
    type: 'record',
    table: 'x_1526023_lost_and_location',
    operation: 'write',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can edit locations',
})

Acl({
    $id: Now.ID['acl_location_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_location',
    operation: 'delete',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete locations',
})

// ════════════════════════════════════════════════════
// LOST ITEM — Anyone signed in can create; reporters can read/edit their own
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_lost_item_create'],
    type: 'record',
    table: 'x_1526023_lost_and_lost_item',
    operation: 'create',
    roles: [],
    adminOverrides: true,
    description: 'Anyone signed in can create Lost Items',
})

Acl({
    $id: Now.ID['acl_lost_item_read'],
    type: 'record',
    table: 'x_1526023_lost_and_lost_item',
    operation: 'read',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Lost and Found admin can read all Lost Items; reporters can read their own via script',
    script: `
        answer = gs.hasRole('x_1526023_lost_and.lost_found_admin') || current.getValue('reporter') == gs.getUserID();
    `,
})

Acl({
    $id: Now.ID['acl_lost_item_write'],
    type: 'record',
    table: 'x_1526023_lost_and_lost_item',
    operation: 'write',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Lost and Found admin can edit all Lost Items; reporters can edit their own via script',
    script: `
        answer = gs.hasRole('x_1526023_lost_and.lost_found_admin') || current.getValue('reporter') == gs.getUserID();
    `,
})

Acl({
    $id: Now.ID['acl_lost_item_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_lost_item',
    operation: 'delete',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Lost Items',
})

// ════════════════════════════════════════════════════
// FOUND ITEM — Anyone signed in can create; visible only to desk role
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_found_item_create'],
    type: 'record',
    table: 'x_1526023_lost_and_found_item',
    operation: 'create',
    roles: [],
    adminOverrides: true,
    description: 'Anyone signed in can create Found Items',
})

Acl({
    $id: Now.ID['acl_found_item_read'],
    type: 'record',
    table: 'x_1526023_lost_and_found_item',
    operation: 'read',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only Lost and Found desk role can read Found Items',
})

Acl({
    $id: Now.ID['acl_found_item_write'],
    type: 'record',
    table: 'x_1526023_lost_and_found_item',
    operation: 'write',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only Lost and Found desk role can edit Found Items',
})

Acl({
    $id: Now.ID['acl_found_item_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_found_item',
    operation: 'delete',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Found Items',
})

// ════════════════════════════════════════════════════
// MATCH SUGGESTION — visible only to desk role
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_match_read'],
    type: 'record',
    table: 'x_1526023_lost_and_match',
    operation: 'read',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only Lost and Found desk role can read Match Suggestions',
})

Acl({
    $id: Now.ID['acl_match_write'],
    type: 'record',
    table: 'x_1526023_lost_and_match',
    operation: 'write',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only Lost and Found desk role can edit Match Suggestions',
})

Acl({
    $id: Now.ID['acl_match_create'],
    type: 'record',
    table: 'x_1526023_lost_and_match',
    operation: 'create',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only Lost and Found desk role can create Match Suggestions',
})

Acl({
    $id: Now.ID['acl_match_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_match',
    operation: 'delete',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Match Suggestions',
})

// ════════════════════════════════════════════════════
// CLAIM — Anyone signed in can create; claimants can read their own
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_claim_create'],
    type: 'record',
    table: 'x_1526023_lost_and_claim',
    operation: 'create',
    roles: [],
    adminOverrides: true,
    description: 'Anyone signed in can create Claims',
})

Acl({
    $id: Now.ID['acl_claim_read'],
    type: 'record',
    table: 'x_1526023_lost_and_claim',
    operation: 'read',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Desk role can read all Claims; claimants can read their own',
    script: `
        answer = gs.hasRole('x_1526023_lost_and.lost_found_admin') || current.getValue('claimant') == gs.getUserID();
    `,
})

Acl({
    $id: Now.ID['acl_claim_write'],
    type: 'record',
    table: 'x_1526023_lost_and_claim',
    operation: 'write',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only desk role can edit Claims',
})

Acl({
    $id: Now.ID['acl_claim_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_claim',
    operation: 'delete',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Claims',
})

// ════════════════════════════════════════════════════
// CUSTODY LOG — visible only to desk role
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_custody_log_read'],
    type: 'record',
    table: 'x_1526023_lost_and_custody_log',
    operation: 'read',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only Lost and Found desk role can read Custody Logs',
})

Acl({
    $id: Now.ID['acl_custody_log_write'],
    type: 'record',
    table: 'x_1526023_lost_and_custody_log',
    operation: 'write',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only Lost and Found desk role can edit Custody Logs',
})

Acl({
    $id: Now.ID['acl_custody_log_create'],
    type: 'record',
    table: 'x_1526023_lost_and_custody_log',
    operation: 'create',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only Lost and Found desk role can create Custody Logs',
})

Acl({
    $id: Now.ID['acl_custody_log_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_custody_log',
    operation: 'delete',
    roles: [lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Custody Logs',
})

