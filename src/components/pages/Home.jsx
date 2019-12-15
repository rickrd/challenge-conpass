import React from 'react'
import styled from 'styled-components'
import Header from '../organisms/Header'
import Button from '../atoms/Button'
import HotspotList from '../organisms/HotspotList'
import Hotspot from '../organisms/Hotspot'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`

const Body = styled.div`
  margin: 0 auto;
`

const Home = props => {
  const { store } = props
  console.log(store.getState())
  store.subscribe(() => console.log(store.getState()))
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <Button store={store} text="Create Hotspot"></Button>
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
