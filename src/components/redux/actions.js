export const ADD_HOTSPOT = 'ADD_HOTSPOT'
export const SHOW_MODAL = 'SHOW_MODAL'
export const EDIT_HOTSPOT = 'EDIT_HOTSPOT'

export function addHotspot(title, description, x, y) {
  return { type: ADD_HOTSPOT, title, description, x, y }
}

export function showModal(show, x, y) {
  return { type: SHOW_MODAL, show, x, y }
}

export function editHotspot(title, description) {
  return { type: EDIT_HOTSPOT, title, description }
}
