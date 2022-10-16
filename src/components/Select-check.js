import styled from 'styled-components'
import Icon from './icons'
import { useState } from 'react'

const SelectCheckStyled = styled.div`
  inline-size: 1.375rem;
  block-size: 1.375rem;
  border: 1px solid transparent;
  border-radius: .375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({isActive}) => {
    if(isActive){
      return {
        backgroundColor: 'var(--green-2)',
        borderColor: 'transparent',
      }
    }

    return {
      backgroundColor: 'var(--white)',
      borderColor: 'var(--black)',
    }
  }}

  .icon{
    ${({isActive}) => {
      if(isActive){
        return{
          opacity: 1,
        }
      }

      return {
        opacity: 0,
      }
    }}
  }
`

function SelectCheck() {
  let [isActive, setIsActive] = useState(false)

  function handleClick(){
    if(!isActive){
      return setIsActive(true)
    }
    return setIsActive(false)
  }

  return (
    <SelectCheckStyled isActive={isActive} onClick={handleClick}>
      <Icon
        className="icon" 
        name="check"
        size="15"
        color="var(--white)"
      />
    </SelectCheckStyled>
    
  )
}

export default SelectCheck
