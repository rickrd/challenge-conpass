import React from 'react'
import styled from 'styled-components'
import Link from '../atoms/Link'

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

const HotspotListItem = props => {
  return (
    <Wrapper>
      <Link text={props.title}></Link>
      <Link text={props.description}></Link>
      <Link text="Delete" href="#"></Link>
    </Wrapper>
  )
}

export default HotspotListItem
