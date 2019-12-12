import React from 'react'
import styled from 'styled-components'
import Hotspot from '../molecules/Hotspot'

const Wrapper = styled.div`
  margin: 0 auto;

  ul {
    list-style: none;
  }
`

const HotspotList = props => {
  return (
    <Wrapper>
      <h3>List of hotspots</h3>
      <ul>
        {props.hotspotList ? (
          props.hotspotList.map(hotspot => <Hotspot title={hotspot.title}></Hotspot>)
        ) : (
          <li>No hotspot found</li>
        )}
      </ul>
    </Wrapper>
  )
}

export default HotspotList
