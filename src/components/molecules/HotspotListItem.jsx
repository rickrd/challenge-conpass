import React from 'react'
import styled from 'styled-components'
import Link from '../atoms/Link'
import {removeHotspot} from '../redux/actions'

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #b9b9b9;
  padding: 16px 8px;
  border-bottom: 2px solid rgba(184, 184, 184, 0.1);
  font-size: 18px;
`

const handleRemoveHotspot = props => {
  const {store, index} = props
  store.dispatch(removeHotspot(index))
}

const HotspotListItem = props => {
  return (
    <Wrapper>
      <Link text={props.title}></Link>
      <Link text={props.description}></Link>
      <a
      
        href="#"
        onClick={() => {
          handleRemoveHotspot(props)
        }}
      >Delete</a>
    </Wrapper>
  )
}

export default HotspotListItem
