import React from 'react'
import styled from 'styled-components'

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

const Button = (props) => {
    return (
    <Wrapper>{props.text}</Wrapper>
    )
}

export default Button