import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import {
    locLibrary,
    locBlockBCanteen,
    locSportsGround,
    locBlockA,
    locHostel,
    locMainGate,
    locAuditorium,
    locComputerLab,
    locParking,
} from './locations.now'

// ══════════════════════════════════════════════════════
// PAIRED ITEMS (3 pairs with counterparts)
// ══════════════════════════════════════════════════════

// --- Pair 1: Black HP laptop (Library) ---
Record({
    $id: Now.ID['demo_lost_laptop'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_lost_item',
    data: {
        number: 'LOST0001001',
        item_title: 'Black HP Laptop',
        category: 'laptop',
        brand: 'HP',
        colour: 'Black',
        description: 'Black HP laptop with a sticker on the lid. 15-inch screen.',
        last_seen_location: locLibrary,
        last_seen_date: '2026-11-14 10:30:00',
        state: 'open',
    },
})

Record({
    $id: Now.ID['demo_found_laptop'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_found_item',
    data: {
        number: 'FOUND0001001',
        item_title: 'HP Laptop',
        category: 'laptop',
        brand: 'HP',
        colour: 'Black',
        description: 'HP laptop, black, sticker on lid. Found on a desk.',
        found_location: locLibrary,
        found_date: '2026-11-14 14:00:00',
        storage_location: 'Lost and Found Office - Shelf A1',
        state: 'stored',
    },
})

// --- Pair 2: Student ID card with blue lanyard (Block B Canteen) ---
Record({
    $id: Now.ID['demo_lost_id_card'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_lost_item',
    data: {
        number: 'LOST0001002',
        item_title: 'Student ID Card with Blue Lanyard',
        category: 'id_card',
        colour: 'Blue',
        description: 'Student ID card with a blue lanyard attached. Name is partially visible.',
        last_seen_location: locBlockBCanteen,
        last_seen_date: '2026-11-13 12:00:00',
        state: 'open',
    },
})

Record({
    $id: Now.ID['demo_found_id_card'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_found_item',
    data: {
        number: 'FOUND0001002',
        item_title: 'ID Card with Blue Lanyard',
        category: 'id_card',
        colour: 'Blue',
        description: 'ID card with a blue lanyard, handed in at the canteen counter.',
        found_location: locBlockBCanteen,
        found_date: '2026-11-13 13:30:00',
        storage_location: 'Lost and Found Office - Shelf B2',
        state: 'stored',
    },
})

// --- Pair 3: Brown leather wallet (Sports Ground) ---
Record({
    $id: Now.ID['demo_lost_wallet'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_lost_item',
    data: {
        number: 'LOST0001003',
        item_title: 'Brown Leather Wallet',
        category: 'wallet',
        colour: 'Brown',
        description: 'Brown leather wallet, last seen on the Sports Ground near the changing rooms.',
        last_seen_location: locSportsGround,
        last_seen_date: '2026-11-12 16:00:00',
        state: 'open',
    },
})

Record({
    $id: Now.ID['demo_found_wallet'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_found_item',
    data: {
        number: 'FOUND0001003',
        item_title: 'Brown Leather Wallet',
        category: 'wallet',
        colour: 'Brown',
        description: 'Brown leather wallet containing cards, found on the Sports Ground.',
        found_location: locSportsGround,
        found_date: '2026-11-12 17:30:00',
        storage_location: 'Lost and Found Office - Drawer C1',
        state: 'stored',
    },
})

// ══════════════════════════════════════════════════════
// UNMATCHED LOST ITEMS (3 with no counterpart)
// ══════════════════════════════════════════════════════

Record({
    $id: Now.ID['demo_lost_phone'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_lost_item',
    data: {
        number: 'LOST0001004',
        item_title: 'Samsung Galaxy Phone',
        category: 'phone',
        brand: 'Samsung',
        colour: 'Blue',
        description: 'Samsung Galaxy phone in a blue case. Cracked screen protector.',
        last_seen_location: locBlockA,
        last_seen_date: '2026-11-11 09:15:00',
        state: 'open',
    },
})

Record({
    $id: Now.ID['demo_lost_keys'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_lost_item',
    data: {
        number: 'LOST0001005',
        item_title: 'Hostel Room Keys',
        category: 'keys',
        description: 'Set of hostel room keys with a red keychain. Two keys on the ring.',
        last_seen_location: locHostel,
        last_seen_date: '2026-11-10 22:00:00',
        state: 'open',
    },
})

Record({
    $id: Now.ID['demo_lost_bag'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_lost_item',
    data: {
        number: 'LOST0001006',
        item_title: 'Grey Backpack',
        category: 'bag',
        colour: 'Grey',
        description: 'Grey backpack with a broken zipper on the front pocket. Contains textbooks.',
        last_seen_location: locAuditorium,
        last_seen_date: '2026-11-09 15:30:00',
        state: 'open',
    },
})

// ══════════════════════════════════════════════════════
// UNMATCHED FOUND ITEMS (3 with no counterpart)
// ══════════════════════════════════════════════════════

Record({
    $id: Now.ID['demo_found_book'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_found_item',
    data: {
        number: 'FOUND0001004',
        item_title: 'Engineering Mathematics Textbook',
        category: 'book',
        description: 'Engineering Mathematics textbook by B.S. Grewal. Name written in pencil inside.',
        found_location: locComputerLab,
        found_date: '2026-11-10 16:00:00',
        storage_location: 'Lost and Found Office - Shelf D1',
        state: 'stored',
    },
})

Record({
    $id: Now.ID['demo_found_accessory'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_found_item',
    data: {
        number: 'FOUND0001005',
        item_title: 'Wireless Earbuds',
        category: 'accessory',
        brand: 'boAt',
        colour: 'White',
        description: 'White boAt wireless earbuds in charging case. Found in the parking lot.',
        found_location: locParking,
        found_date: '2026-11-11 08:00:00',
        storage_location: 'Lost and Found Office - Shelf A3',
        state: 'stored',
    },
})

Record({
    $id: Now.ID['demo_found_keys'],
    $meta: { installMethod: 'demo' },
    table: 'x_1526023_lost_and_found_item',
    data: {
        number: 'FOUND0001006',
        item_title: 'Bike Key',
        category: 'keys',
        description: 'Single bike key with Honda logo. Found near the main gate.',
        found_location: locMainGate,
        found_date: '2026-11-12 07:30:00',
        storage_location: 'Lost and Found Office - Key Box',
        state: 'stored',
    },
})

