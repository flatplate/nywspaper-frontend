import React from 'react';
import styled from 'styled-components';


const ButtonDiv = styled.div`
  padding: 1em;
  background-color: #262636f6;
  color: #f1e6d6;
  font-family: 'Source Serif Pro', serif;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 100ms linear;
  user-select: none;
  text-align: center;
  place-items: center;
  display: flex;
  
  &:hover {
    background-color: #262636e6;
    transform: scale(1.05);
  }

  &:active {
    background-color: linear-gradient(#536976, #262636);
  }
`

const Button: React.FC = (props) => {
  return (
    <ButtonDiv>
      {props.children}
    </ButtonDiv>
  )
}

export {Button}