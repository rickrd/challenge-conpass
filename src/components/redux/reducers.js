import { ADD_HOTSPOT, EDIT_HOTSPOT_TITLE, EDIT_HOTSPOT_DESCRIPTION } from './actions'

const initialState = {
  hotspots: [
    {
      title: 'Hotspot #1',
      description: 'This is the hotspot #1',
      x: 500,
      y: 500
    },
    {
      title: 'Hotspot #2',
      description: 'this is the hotspot #2',
      x: 1200,
      y: 300
    }
  ]
}

const hotspots = (state = [], action) => {
  switch (action.type) {
    case ADD_HOTSPOT:
      return [
        ...state,
        {
          title: action.title,
          description: action.description,
          x: action.x,
          y: action.y
        }
      ]
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

    default:
      return state
  }
}

export default function reducers(state = initialState, action) {
  return {
    hotspots: hotspots(state.hotspots, action)
  }
}
