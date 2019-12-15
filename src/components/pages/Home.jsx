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

  .highlight {
    border: 2px solid red;
  }
`

const Body = styled.div`
  margin: 0 auto;
`

const Home = props => {
  const { store } = props
  store.subscribe(() => console.log(store.getState()))
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <Button store={store} text="Create Hotspot"></Button>
        <HotspotList hotspotList={store.getState().hotspots} store={store}></HotspotList>
        <Hotspot store={store}></Hotspot>
      </Body>
    </Wrapper>
  )
}

function mapStateToProps(state) {
  return {
    hotspots: state.hotspots
  }
}

export default connect(mapStateToProps)(Home)
