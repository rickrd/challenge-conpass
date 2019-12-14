export const ADD_HOTSPOT = 'ADD_HOTSPOT'
export const SHOW_MODAL = 'SHOW_MODAL'
export const EDIT_HOTSPOT_TITLE = 'EDIT_HOTSPOT_TITLE'
export const EDIT_HOTSPOT_DESCRIPTION = 'EDIT_HOTSPOT_DESCRIPTION'

export function addHotspot(title, description, x, y) {
  return { type: ADD_HOTSPOT, title, description, x, y }
}

export function showModal(show, x, y) {
  return { type: SHOW_MODAL, show, x, y }
}

export function editHotspotTitle(title, index) {
  return { type: EDIT_HOTSPOT_TITLE, title, index }
}

export function editHotspotDescription(description, index) {
  return { type: EDIT_HOTSPOT_DESCRIPTION, description, index }
}
