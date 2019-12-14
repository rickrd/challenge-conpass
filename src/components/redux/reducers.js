import { ADD_HOTSPOT, SHOW_MODAL } from './actions'

// {
//   hotspots: [
//     {
//       title: 'Hotspot #1'
//     },
//     {
//       title: 'Hotspot #2'
//     }
//   ]
// }

const initialState = {
  hotspots: [
    {
			title: 'Hotspot #1',
			description: 'This is the hotspot #1',
			x: 0,
			y: 0
    },
    {
			title: 'Hotspot #2',
			description: 'this is the hotspot #2',
			x: 0,
			y: 0
    }
  ],
  modal: {
    show: false,
    x: 0,
    y: 0
  }
}

const hotspots = (state = [], action) => {
  switch (action.type) {
    case ADD_HOTSPOT:
      return Object.assign({}, state, {
        hotspots: [
          ...state.hotspots,
          {
            title: action.title
          }
        ]
      })
    default:
      return state
  }
}

const modal = (state = {}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, {
					show: action.show,
					x: action.x,
					y: action.y
      })
    default:
      return state
  }
}

export default function reducers(state = initialState, action) {
  return {
    hotspots: hotspots(state.hotspots, action),
    modal: modal(state.modal, action)
  }
}
