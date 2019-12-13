export const ADD_HOTSPOT = 'ADD_HOTSPOT'
export const SHOW_MODAL = 'SHOW_MODAL'

export function addHotspot(title) {
  return { type: ADD_HOTSPOT, title }
}

export function showModal(show, x, y) {
  return { type: SHOW_MODAL, show, x, y }
}
