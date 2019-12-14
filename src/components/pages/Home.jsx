import React from 'react'
import styled from 'styled-components'
import Header from '../organisms/Header'
import Button from '../atoms/Button'
import HotspotList from '../organisms/HotspotList'
import { addHotspot, showModal } from '../redux/actions'
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

const ModalWrapper = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgb(247, 103, 104);
  border-radius: 50%;
  padding: 2px;
  border: 1px solid red;
  top: ${props => props.y -8}px;
  left: ${props => props.x-8}px;
`

const EditHotspot = styled.div`
  display: block;
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  top: 25px;
  left: -100px;
`

const handleMouseMove = e => {
  console.log(e.target)
}

const handleMouseClick = (e, store) => {
  console.log(e)
  console.log(store.getState())
  document.removeEventListener('mousemove', handleMouseMove)
  // store.dispatch(showModal(true, e.y, e.x))
  store.dispatch(addHotspot('hotspot test', 'this is a hotspot', e.x, e.y))
}

const handleCreateHotspot = store => {
  document.addEventListener('click', e => handleMouseClick(e, store), { once: true })
  document.addEventListener('mousemove', handleMouseMove)
}

const Modal = props => {
  const { store } = props
  console.log(store)
  return store.getState().hotspots.length
    ? store
        .getState()
        .hotspots.map(hotspot => (
          <ModalWrapper show={true} x={hotspot.x} y={hotspot.y}>
            <EditHotspot x={hotspot.x} y={hotspot.y}>
              <input></input>
              <input></input>
            </EditHotspot>
          </ModalWrapper>
        ))
    : null
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
        <Modal store={store}></Modal>
      </Body>
    </Wrapper>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    hotspots: state.hotspots,
    modal: state.modal
  }
}

export default connect(mapStateToProps)(Home)
