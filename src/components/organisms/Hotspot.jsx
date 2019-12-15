import React from 'react'
import { editHotspotTitle, editHotspotDescription, editableHotspot } from '../redux/actions'
import styled from 'styled-components'
import Dot from '../atoms/Dot'

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
  e.target.id === 'title'
    ? store.dispatch(editHotspotTitle(e.target.value, index))
    : store.dispatch(editHotspotDescription(e.target.value, index))
}

const Hotspot = props => {
  const { store } = props
  return store.getState().hotspots.length
    ? store.getState().hotspots.map((hotspot, index) => (
        <div>
          <Dot hotspot={hotspot} store={store} index={index}></Dot>
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
