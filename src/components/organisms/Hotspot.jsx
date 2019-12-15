import React from 'react'
import { editHotspotTitle, editHotspotDescription } from '../redux/actions'
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
  box-shadow: 1px 1px 4px 0px #eee;
  top: ${props => props.y + 20}px;
  left: ${props => props.x - 100}px;
  z-index: 8;

  span {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #fff;
    top: -6px;
    transform: rotate(45deg);
    left: 94px;
    border-top: 1px solid #cecece5c;
    border-left: 1px solid #cecece5c;
  }

  input {
    border: none;
    margin: 10px 10px 0 10px;
    width: 180px;
    font-size: 14px;
    &:nth-child(2){
        font-size: 18px;
    }

    &:nth-child(3) {
        opacity: 50%;
    }
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
              <span></span>
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
