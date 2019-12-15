import React from 'react'
import { editHotspotTitle, editHotspotDescription, editableHotspot } from '../redux/actions'
import styled from 'styled-components'

const HotspotWrapper = styled.div`
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

const EditHotspot = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  top: ${props => props.y + 20}px;
  left: ${props => props.x - 100}px;
  z-index: 8;
  input {
    border: none;
  }
`

const handleEditHotspot = (e, store, index) => {
  console.log(e.target)
  e.target.id === 'title'
    ? store.dispatch(editHotspotTitle(e.target.value, index))
    : store.dispatch(editHotspotDescription(e.target.value, index))
}

const handleHotspotClick = (e, store, index) => {
  store.dispatch(editableHotspot(index))
}

const Hotspot = props => {
  const { store } = props
  console.log(store)
  return store.getState().hotspots.length
    ? store.getState().hotspots.map((hotspot, index) => (
        <div>
          <HotspotWrapper
            x={hotspot.x}
            y={hotspot.y}
            onClick={e => handleHotspotClick(e, store, index)}
          ></HotspotWrapper>
          <EditHotspot show={hotspot.editable} x={hotspot.x} y={hotspot.y}>
            <input
              id="title"
              value={hotspot.title}
              onChange={e => handleEditHotspot(e, store, index)}
            ></input>
            <input
              id="description"
              value={hotspot.description}
              onChange={e => handleEditHotspot(e, store, index)}
            ></input>
          </EditHotspot>
        </div>
      ))
    : null
}

export default Hotspot
