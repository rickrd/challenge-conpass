import React from 'react'
import Logo from '../atoms/Logo'
import Link from '../atoms/Link'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Header = () => {
  return (
    <Wrapper>
      <Logo></Logo>
      <Link text="Link fake 1"></Link>
      <Link text="Link fake 2"></Link>
      <Link text="Link fake 3"></Link>
      <Link text="Link fake 4"></Link>
    </Wrapper>
  )
}

export default Header
