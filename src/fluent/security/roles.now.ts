import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

/**
 * Student role - students can report lost items, view their own items, and submit claims.
 */
export const roleStudent = Role({
    name: 'x_1526023_lost_and.student',
    description: 'Student role for Ramachandra College of Engineering - report lost items and submit claims',
})

/**
 * Security role - campus security guards who can log found items, manage storage, and custody handover.
 */
export const roleSecurity = Role({
    name: 'x_1526023_lost_and.security',
    description: 'Campus security personnel - log found items, inspect custody logs, and handle item storage',
})

/**
 * Staff role - college staff and desk personnel who can log found items, review matches, and verify claims.
 */
export const roleStaff = Role({
    name: 'x_1526023_lost_and.staff',
    description: 'College staff and desk members - manage found items, match suggestions, and claim verifications',
})

/**
 * Desk Admin role - desk staff administrator with full operational access to the Lost and Found system.
 */
export const lostFoundAdmin = Role({
    name: 'x_1526023_lost_and.lost_found_admin',
    description: 'Lost and Found desk staff - full access to all Lost and Found tables',
    containsRoles: [roleStaff, roleSecurity],
})

/**
 * Application Admin role - full administrative control over the Lost and Found application.
 */
export const roleAdmin = Role({
    name: 'x_1526023_lost_and.admin',
    description: 'Lost and Found application administrator - full control over all data, locations, and settings',
    scopedAdmin: true,
    containsRoles: [lostFoundAdmin, roleStaff, roleSecurity, roleStudent],
})
