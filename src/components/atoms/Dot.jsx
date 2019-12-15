import React from 'react'
import styled from 'styled-components'
import {editableHotspot} from '../redux/actions'

const DotWrapper = styled.div`
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgb(247, 103, 104);
  border-radius: 50%;
  padding: 2px;
  border: 1px solid red;
  top: ${props => props.y - 8}px;
  left: ${props => props.x - 8}px;
  cursor: pointer;
  z-index: 9;
`

const handleHotspotClick = (store, index) => {
  store.dispatch(editableHotspot(index))
}

const Dot = (props) => {
    console.log(props)
  return (
    <DotWrapper
      x={props.hotspot.x}
      y={props.hotspot.y}
      onClick={() => handleHotspotClick(props.store, props.index)}
    ></DotWrapper>
  )
}

export default Dot
