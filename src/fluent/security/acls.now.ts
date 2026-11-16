import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { roleAdmin, roleStaff, roleSecurity, roleStudent, lostFoundAdmin } from './roles.now'

// Re-export roles for convenience
export { roleAdmin, roleStaff, roleSecurity, roleStudent, lostFoundAdmin }

// ════════════════════════════════════════════════════
// LOCATION — Everyone can read; admins and staff can manage
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_location_read'],
    type: 'record',
    table: 'x_1526023_lost_and_location',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Everyone can read locations',
})

Acl({
    $id: Now.ID['acl_location_create'],
    type: 'record',
    table: 'x_1526023_lost_and_location',
    operation: 'create',
    roles: [roleAdmin, lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can create locations',
})

Acl({
    $id: Now.ID['acl_location_write'],
    type: 'record',
    table: 'x_1526023_lost_and_location',
    operation: 'write',
    roles: [roleAdmin, lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can edit locations',
})

Acl({
    $id: Now.ID['acl_location_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_location',
    operation: 'delete',
    roles: [roleAdmin, lostFoundAdmin],
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
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Anyone signed in (students, staff, admin) can create Lost Items',
})

Acl({
    $id: Now.ID['acl_lost_item_read'],
    type: 'record',
    table: 'x_1526023_lost_and_lost_item',
    operation: 'read',
    roles: [roleAdmin, lostFoundAdmin, roleStaff],
    adminOverrides: true,
    description: 'Admins and staff can read all Lost Items; reporters can read their own',
    script: `
        answer = gs.hasRole('x_1526023_lost_and.admin') ||
                 gs.hasRole('x_1526023_lost_and.lost_found_admin') ||
                 gs.hasRole('x_1526023_lost_and.staff') ||
                 current.getValue('reporter') == gs.getUserID();
    `,
})

Acl({
    $id: Now.ID['acl_lost_item_write'],
    type: 'record',
    table: 'x_1526023_lost_and_lost_item',
    operation: 'write',
    roles: [roleAdmin, lostFoundAdmin, roleStaff],
    adminOverrides: true,
    description: 'Admins and staff can edit all Lost Items; reporters can edit their own',
    script: `
        answer = gs.hasRole('x_1526023_lost_and.admin') ||
                 gs.hasRole('x_1526023_lost_and.lost_found_admin') ||
                 gs.hasRole('x_1526023_lost_and.staff') ||
                 current.getValue('reporter') == gs.getUserID();
    `,
})

Acl({
    $id: Now.ID['acl_lost_item_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_lost_item',
    operation: 'delete',
    roles: [roleAdmin, lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Lost Items',
})

// ════════════════════════════════════════════════════
// FOUND ITEM — Anyone signed in can create; visible only to desk/staff/security/admin
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_found_item_create'],
    type: 'record',
    table: 'x_1526023_lost_and_found_item',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Anyone signed in can create/log Found Items',
})

Acl({
    $id: Now.ID['acl_found_item_read'],
    type: 'record',
    table: 'x_1526023_lost_and_found_item',
    operation: 'read',
    roles: [roleAdmin, lostFoundAdmin, roleStaff, roleSecurity],
    adminOverrides: true,
    description: 'Admins, desk staff, college staff, and security can read Found Items',
})

Acl({
    $id: Now.ID['acl_found_item_write'],
    type: 'record',
    table: 'x_1526023_lost_and_found_item',
    operation: 'write',
    roles: [roleAdmin, lostFoundAdmin, roleStaff, roleSecurity],
    adminOverrides: true,
    description: 'Admins, desk staff, college staff, and security can edit Found Items',
})

Acl({
    $id: Now.ID['acl_found_item_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_found_item',
    operation: 'delete',
    roles: [roleAdmin, lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Found Items',
})

// ════════════════════════════════════════════════════
// MATCH SUGGESTION — visible to desk role, staff, and admin
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_match_read'],
    type: 'record',
    table: 'x_1526023_lost_and_match',
    operation: 'read',
    roles: [roleAdmin, lostFoundAdmin, roleStaff],
    adminOverrides: true,
    description: 'Admins, desk staff, and staff can read Match Suggestions',
})

Acl({
    $id: Now.ID['acl_match_write'],
    type: 'record',
    table: 'x_1526023_lost_and_match',
    operation: 'write',
    roles: [roleAdmin, lostFoundAdmin, roleStaff],
    adminOverrides: true,
    description: 'Admins, desk staff, and staff can edit Match Suggestions',
})

Acl({
    $id: Now.ID['acl_match_create'],
    type: 'record',
    table: 'x_1526023_lost_and_match',
    operation: 'create',
    roles: [roleAdmin, lostFoundAdmin, roleStaff],
    adminOverrides: true,
    description: 'Admins, desk staff, and staff can create Match Suggestions',
})

Acl({
    $id: Now.ID['acl_match_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_match',
    operation: 'delete',
    roles: [roleAdmin, lostFoundAdmin],
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
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Anyone signed in (students, staff) can create Claims',
})

Acl({
    $id: Now.ID['acl_claim_read'],
    type: 'record',
    table: 'x_1526023_lost_and_claim',
    operation: 'read',
    roles: [roleAdmin, lostFoundAdmin, roleStaff],
    adminOverrides: true,
    description: 'Admins and staff can read all Claims; claimants can read their own',
    script: `
        answer = gs.hasRole('x_1526023_lost_and.admin') ||
                 gs.hasRole('x_1526023_lost_and.lost_found_admin') ||
                 gs.hasRole('x_1526023_lost_and.staff') ||
                 current.getValue('claimant') == gs.getUserID();
    `,
})

Acl({
    $id: Now.ID['acl_claim_write'],
    type: 'record',
    table: 'x_1526023_lost_and_claim',
    operation: 'write',
    roles: [roleAdmin, lostFoundAdmin, roleStaff],
    adminOverrides: true,
    description: 'Only desk staff and admins can edit Claims',
})

Acl({
    $id: Now.ID['acl_claim_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_claim',
    operation: 'delete',
    roles: [roleAdmin, lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Claims',
})

// ════════════════════════════════════════════════════
// CUSTODY LOG — visible to desk role, security, staff, and admin
// ════════════════════════════════════════════════════
Acl({
    $id: Now.ID['acl_custody_log_read'],
    type: 'record',
    table: 'x_1526023_lost_and_custody_log',
    operation: 'read',
    roles: [roleAdmin, lostFoundAdmin, roleStaff, roleSecurity],
    adminOverrides: true,
    description: 'Admins, desk staff, staff, and security can read Custody Logs',
})

Acl({
    $id: Now.ID['acl_custody_log_write'],
    type: 'record',
    table: 'x_1526023_lost_and_custody_log',
    operation: 'write',
    roles: [roleAdmin, lostFoundAdmin, roleStaff, roleSecurity],
    adminOverrides: true,
    description: 'Admins, desk staff, staff, and security can edit Custody Logs',
})

Acl({
    $id: Now.ID['acl_custody_log_create'],
    type: 'record',
    table: 'x_1526023_lost_and_custody_log',
    operation: 'create',
    roles: [roleAdmin, lostFoundAdmin, roleStaff, roleSecurity],
    adminOverrides: true,
    description: 'Admins, desk staff, staff, and security can create Custody Logs',
})

Acl({
    $id: Now.ID['acl_custody_log_delete'],
    type: 'record',
    table: 'x_1526023_lost_and_custody_log',
    operation: 'delete',
    roles: [roleAdmin, lostFoundAdmin],
    adminOverrides: true,
    description: 'Only admins can delete Custody Logs',
})
