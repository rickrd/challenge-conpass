import React from 'react'
import Home from './components/pages/Home'
import { createStore } from 'redux'
import hotspots from './components/redux/reducers'

const store = createStore(hotspots)

function Main() {
  console.log(store.getState())
  return <Home></Home>
}

export default Main
