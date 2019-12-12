import React from 'react'
import styled from 'styled-components'
import Link from '../atoms/Link'

const Wrapper = styled.li`
  color: #cacaca;
`

const Hotspot = props => {
  return (
    <Wrapper>
      <Link text={props.title}></Link>
    </Wrapper>
  )
}

export default Hotspot
