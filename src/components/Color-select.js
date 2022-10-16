import styled from 'styled-components'
import { useState } from 'react'

const ColorSelectStyled = styled.span`
  cursor: pointer;
  inline-size: 1.625rem;
  block-size: 1.625rem;
  border-radius: 50%;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;

  ${({isActive}) => {
    if(isActive){
      return {
        borderColor: 'var(--black)',
      }
    }

    return {
      borderColor: 'transparent',
    }
  }}

  .color{
    inline-size: 1.25rem;
    block-size: 1.25rem;
    border-radius: 50%;
    background-color: ${({color}) => color };
  }

`

function ColorSelect(props) {
  let [ isActive, setIsActive ] = useState(false)

  function handleClick(){
    if(!isActive){
      return setIsActive(true)
    }
    return setIsActive(false)
  }

  return (
    <ColorSelectStyled {...props} isActive={isActive} onClick={handleClick}>
      <span className='color'/>
    </ColorSelectStyled>
    
  )
}

export default ColorSelect
