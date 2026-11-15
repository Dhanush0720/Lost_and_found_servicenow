import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// ──────────────────────────────────────────────────
// 12 Locations
// ──────────────────────────────────────────────────
export const locLibrary = Record({
    $id: Now.ID['loc_library'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Library', building: 'Central Library', campus_zone: 'Academic Zone' },
})

export const locBlockA = Record({
    $id: Now.ID['loc_block_a'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Block A', building: 'Block A', campus_zone: 'Academic Zone' },
})

export const locBlockBCanteen = Record({
    $id: Now.ID['loc_block_b_canteen'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Block B Canteen', building: 'Block B', campus_zone: 'Food Court Zone' },
})

export const locAdminBlock = Record({
    $id: Now.ID['loc_admin_block'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Admin Block', building: 'Admin Block', campus_zone: 'Administrative Zone' },
})

export const locHostel = Record({
    $id: Now.ID['loc_hostel'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Hostel', building: 'Hostel Complex', campus_zone: 'Residential Zone' },
})

export const locSportsGround = Record({
    $id: Now.ID['loc_sports_ground'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Sports Ground', building: 'Sports Complex', campus_zone: 'Sports Zone' },
})

export const locMainGate = Record({
    $id: Now.ID['loc_main_gate'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Main Gate', building: 'Main Gate', campus_zone: 'Entrance Zone' },
})

export const locAuditorium = Record({
    $id: Now.ID['loc_auditorium'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Auditorium', building: 'Auditorium Hall', campus_zone: 'Cultural Zone' },
})

export const locComputerLab = Record({
    $id: Now.ID['loc_computer_lab'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Computer Lab', building: 'Block C', campus_zone: 'Academic Zone' },
})

export const locParking = Record({
    $id: Now.ID['loc_parking'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Parking Lot', building: 'Parking Area', campus_zone: 'Entrance Zone' },
})

export const locWorkshop = Record({
    $id: Now.ID['loc_workshop'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Workshop', building: 'Workshop Block', campus_zone: 'Technical Zone' },
})

export const locCafeteria = Record({
    $id: Now.ID['loc_cafeteria'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_location',
    data: { name: 'Cafeteria', building: 'Student Centre', campus_zone: 'Food Court Zone' },
})

