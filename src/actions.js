export const SWORD_ADD= 'SWORD_ADD'
export const SWORD_ADD_ALL = 'SWORD_ADD_ALL'
export const SWORD_DELETE = 'SWORD_DELETE'
export const SWORD_UPDATE_AVAILABILITY = 'SWORD_UPDATE_AVAILABILITY'

export function swordAdd (_id, swordName, swordType) {
    return {type: SWORD_ADD, _id, swordName, swordType};
}

export function swordAddAll (sword_list) {
    return {type: SWORD_ADD_ALL, sword_list};
}

export function swordDelete (_id) {
    return {type: SWORD_DELETE, _id};
}

export function swordUpdateAvailability (_id) {
    return {type: SWORD_UPDATE_AVAILABILITY, _id};
}