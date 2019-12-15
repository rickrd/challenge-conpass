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
  const elements = document.getElementsByTagName('*')
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] != e.target && elements[i].classList.contains('highlight')) {
      elements[i].classList.remove('highlight')
    } else if (elements[i] == e.target) {
      e.target.classList.add('highlight')
    }
  }
}

const handleMouseClick = (e, store) => {
  console.log(e)
  console.log(store.getState())
  document.removeEventListener('mousemove', handleMouseMove)
  store.dispatch(addHotspot('Hotspot', 'This is a hotspot', e.x, e.y, true))
  e.target.style.border = 0
}

const handleCreateHotspot = store => {
  document.addEventListener('click', e => handleMouseClick(e, store), { once: true })
  document.addEventListener('mousemove', handleMouseMove)
}

const Button = props => {
  return <Wrapper onClick={() => handleCreateHotspot(props.store)}>{props.text}</Wrapper>
}

export default Button
