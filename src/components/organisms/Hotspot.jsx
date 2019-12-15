import React from 'react'
import { editHotspotTitle, editHotspotDescription } from '../redux/actions'
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
`

const EditHotspot = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  top: 25px;
  left: -100px;

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

const Hotspot = props => {
  const { store } = props
  console.log(store)
  return store.getState().hotspots.length
    ? store.getState().hotspots.map((hotspot, index) => (
        <HotspotWrapper x={hotspot.x} y={hotspot.y}>
          <EditHotspot show={false} x={hotspot.x} y={hotspot.y}>
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
        </HotspotWrapper>
      ))
    : null
}

export default Hotspot
