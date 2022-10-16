import styled from 'styled-components'
import { useState } from 'react'

const SizeSelectStyled = styled.button`
  border-radius: 50%;
  border: 1px solid var(--grey-3);
  padding: .5rem;
  box-sizing: border-box;
  font: var(--body-16regular);
  inline-size: 3rem;
  block-size: 3rem;
  cursor: pointer;

  ${({isActive}) => {
    if(isActive){
      return {
        background: 'var(--black)',
        color: 'var(--white)',
        borderColor: 'transparent',
      }
    }
    return {
      background: 'var(--white)',
      color: 'var(--black)',
      borderColor: 'var(--grey-3)'
    }
  }}
`

function SizeSelect({text}) {
  let [ isActive, setIsactive ] = useState(false)

  function handleClick(){
    if(!isActive){
      return setIsactive(true)
    } 
    return setIsactive(false)
  }


  return (
    <SizeSelectStyled isActive={isActive} onClick={handleClick}>
      {text}
    </SizeSelectStyled>
    
  )
}

export default SizeSelect
