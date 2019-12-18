import {
  ADD_HOTSPOT,
  REMOVE_HOTSPOT,
  EDIT_HOTSPOT_TITLE,
  EDIT_HOTSPOT_DESCRIPTION,
  EDITABLE_HOTSPOT
} from './actions'

const initialState = {
  hotspots: localStorage.getItem('hotspots') ? JSON.parse(localStorage.getItem('hotspots')) : []
}

const hotspots = (state = [], action) => {
  switch (action.type) {
    case ADD_HOTSPOT:
      localStorage.setItem(
        'hotspots',
        JSON.stringify([
          ...state,
          {
            title: action.title,
            description: action.description,
            x: action.x,
            y: action.y,
            editable: action.editable
          }
        ])
      )
      return [
        ...state,
        {
          title: action.title,
          description: action.description,
          x: action.x,
          y: action.y,
          editable: action.editable
        }
      ]

    case REMOVE_HOTSPOT:
      return state.filter(hotspot => hotspot != state[action.index])

    case EDIT_HOTSPOT_TITLE:
      return state.map((hotspot, index) => {
        if (index === action.index) {
          return Object.assign({}, hotspot, {
            title: action.title
          })
        } else return hotspot
      })

    case EDIT_HOTSPOT_DESCRIPTION:
      return state.map((hotspot, index) => {
        if (index === action.index) {
          return Object.assign({}, hotspot, {
            description: action.description
          })
        } else return hotspot
      })

    case EDITABLE_HOTSPOT:
      return state.map((hotspot, index) => {
        if (index === action.index) {
          return Object.assign({}, hotspot, {
            editable: !hotspot.editable
          })
        } else return hotspot
      })

    default:
      return state
  }
}

export default function reducers(state = initialState, action) {
  return {
    hotspots: hotspots(state.hotspots, action)
  }
}
