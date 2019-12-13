import React from 'react'
import styled from 'styled-components'
import Header from '../organisms/Header'
import Button from '../atoms/Button'
import HotspotList from '../organisms/HotspotList'

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

const handleMouseMove = e => {
  console.log(e.target)
}

const handleMouseClick = e => {
  alert('clicked')
  console.log(e)
  document.removeEventListener('mousemove', handleMouseMove)
}

const handleCreateHotspot = () => {
  document.addEventListener('click', handleMouseClick, { once: true })
  document.addEventListener('mousemove', handleMouseMove)
}

const Home = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <Button onClick={handleCreateHotspot} text="Create Hotspot"></Button>
        <HotspotList hotspotList={hotspotList}></HotspotList>
      </Body>
    </Wrapper>
  )
}

export default Home
