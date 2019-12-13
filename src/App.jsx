import React from 'react'
import Home from './components/pages/Home'
import { createStore } from 'redux'
import hotspots from './components/redux/reducers'
import { addHotspot } from './components/redux/actions'

const store = createStore(hotspots)

function Main() {
  console.log(store.getState())
  const unsubscribe = store.subscribe(() => console.log(store.getState()))
  store.dispatch(addHotspot('Hotspot #3'))
  unsubscribe()
  return <Home></Home>
}

export default Main
