import React from 'react'
import styled from 'styled-components'
import Hotspot from '../molecules/Hotspot'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;

  h3 {
    text-align: left;
    padding: 6px 6px;
    color: #b9b9b9;
    background-color: #ebebeb;
    font-weight: normal;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

const HotspotList = props => {
  return (
    <Wrapper>
      <h3>List of hotspots</h3>
      <ul>
        {props.hotspotList.length ? (
          props.hotspotList.map(hotspot => <Hotspot key={hotspot.title} title={hotspot.title}></Hotspot>)
        ) : (
          <li>No hotspot found</li>
        )}
      </ul>
    </Wrapper>
  )
}

export default HotspotList
