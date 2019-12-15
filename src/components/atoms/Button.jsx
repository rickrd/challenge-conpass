import React from 'react'
import styled from 'styled-components'
import { addHotspot } from '../redux/actions'

const Wrapper = styled.button`
  background: rgb(58, 192, 199);
  border: 0;
  border-radius: 50px;
  color: #fff;
  padding: 8px 15px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`

const handleMouseMove = e => {
  console.log(e)
  // document.get
  // e.srcElement.style.border = '0'
  // e.target.style.border = '1px solid red'
}

const handleMouseClick = (e, store) => {
  console.log(e)
  console.log(store.getState())
  document.removeEventListener('mousemove', handleMouseMove)
  // store.dispatch(showHotspot(true, e.y, e.x))
  store.dispatch(addHotspot('Hotspot', 'This is a hotspot', e.x, e.y))
}

const handleCreateHotspot = store => {
  document.addEventListener('click', e => handleMouseClick(e, store), { once: true })
  document.addEventListener('mousemove', handleMouseMove)
}

const Button = props => {
  return <Wrapper onClick={() => handleCreateHotspot(props.store)}>{props.text}</Wrapper>
}

export default Button
