import {ADD_HOTSPOT} from './actions'

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
  hotspots: [{
		title: 'Hotspot #1'
	},
{
	title: 'Hotspot #2'
}]
}

const hotspots = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOTSPOT:
      return Object.assign({}, state, {
        hotspots: [
					...state.todos,
					{
						title: action.title
					}
				]
      })
    default:
      return state
  }
}

export default hotspots