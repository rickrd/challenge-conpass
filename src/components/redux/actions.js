export const ADD_HOTSPOT = 'ADD_HOTSPOT'
export const EDIT_HOTSPOT_TITLE = 'EDIT_HOTSPOT_TITLE'
export const EDIT_HOTSPOT_DESCRIPTION = 'EDIT_HOTSPOT_DESCRIPTION'
export const EDITABLE_HOTSPOT = 'EDITABLE_HOTSPOT'

export function addHotspot(title, description, x, y, editable) {
  return { type: ADD_HOTSPOT, title, description, x, y, editable}
}

export function editHotspotTitle(title, index) {
  return { type: EDIT_HOTSPOT_TITLE, title, index }
}

export function editHotspotDescription(description, index) {
  return { type: EDIT_HOTSPOT_DESCRIPTION, description, index }
}

export function editableHotspot(index) {
  return { type: EDITABLE_HOTSPOT, index }
}
