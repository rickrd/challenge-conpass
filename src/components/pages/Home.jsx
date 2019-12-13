import React from 'react'
import styled from 'styled-components'
import Header from '../organisms/Header'
import Button from '../atoms/Button'
import HotspotList from '../organisms/HotspotList'
import { addHotspot, showModal } from '../redux/actions'

const Wrapper = styled.div`
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`

const Body = styled.div`
  margin: 0 auto;
`

const hotspotList = [
  {
    title: 'Hotspot #1',
    x: 1,
    y: 1
  },
  {
    title: 'Hotspot #2',
    x: 2,
    y: 2
  }
]

const ModalWrapper = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  background: red;
  top: 50px;
  left: 50px;
`

const handleMouseMove = e => {
  console.log(e.target)
}

const handleMouseClick = (e, store) => {
  alert('clicked')
  console.log(e)
  console.log(store.getState())
  document.removeEventListener('mousemove', handleMouseMove)
  store.dispatch(showModal(true, 50, 50 ))
  // store.dispatch(addHotspot('hotspot #3'))
}

const handleCreateHotspot = store => {
  document.addEventListener('click', e => handleMouseClick(e, store), { once: true })
  document.addEventListener('mousemove', handleMouseMove)
}

const Modal = props => {
  console.log(props)
  return props.subscribe(() => (
    props.getState().modal.show ? <ModalWrapper></ModalWrapper> : null
  ))
  
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
        <HotspotList hotspotList={hotspotList}></HotspotList>
        <Modal {...store}></Modal>
      </Body>
    </Wrapper>
  )
}

export default Home
