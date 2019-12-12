import React from 'react'
import styled from 'styled-components'
import Header from '../organisms/Header'
import Button from '../atoms/Button'
import HotspotList from '../organisms/HotspotList'

const Wrapper = styled.div`
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
`

const Body = styled.div`
  margin: 0 auto;
`

const Home = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <Button text="Create Hotspot"></Button>
        <HotspotList></HotspotList>
      </Body>
    </Wrapper>
  )
}

export default Home
