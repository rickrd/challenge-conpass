import React from 'react'
import styled from 'styled-components'
import Header from '../organisms/Header'
import Button from '../atoms/Button'
import HotspotList from '../organisms/HotspotList'
import Hotspot from '../organisms/Hotspot'
import { addHotspot, showModal, editHotspotTitle, editHotspotDescription } from '../redux/actions'
import { connect } from 'react-redux'
import { prependToMemberExpression } from '@babel/types'

const Wrapper = styled.div`
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`

const Body = styled.div`
  margin: 0 auto;
`

const handleMouseMove = e => {
  console.log(e)
  // document.get
  // e.srcElement.style.border = '0'
  // e.target.style.border = '1px solid red'
}

const handleMouseClick = (e, store) => {
  console.log(e)
  console.log(store.getState())
  document.removeEventListener('mousemove', handleMouseMove)
  // store.dispatch(showHotspot(true, e.y, e.x))
  store.dispatch(addHotspot('Hotspot', 'This is a hotspot', e.x, e.y))
}

const handleCreateHotspot = store => {
  document.addEventListener('click', e => handleMouseClick(e, store), { once: true })
  document.addEventListener('mousemove', handleMouseMove)
}

const Home = props => {
  const { store } = props
  console.log(store.getState())
  store.subscribe(() => console.log(store.getState()))
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <Button onClick={() => handleCreateHotspot(store)} text="Create Hotspot"></Button>
        <HotspotList hotspotList={store.getState().hotspots}></HotspotList>
        <Hotspot store={store}></Hotspot>
      </Body>
    </Wrapper>
  )
}

function mapStateToProps(state) {
  return {
    hotspots: state.hotspots,
    modal: state.modal
  }
}

export default connect(mapStateToProps)(Home)
