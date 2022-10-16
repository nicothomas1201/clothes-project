import styled from 'styled-components'
import { useState } from 'react'

const FilterTypeStyled = styled.button`
  background: var(--grey);
  padding: .5rem;
  border-radius: 3.125rem;
  color: var(--black);
  font: var(--body-16regular);
  border: none;
  cursor: pointer;
  transition: .5s background,color linear;

  ${({isActive}) => {
    if(isActive){
      return {
        color: 'var(--white)', 
        backgroundColor: 'var(--black)'
      }
    }
  }}
`

function FilterType({ text }) {
  let [ isActive, setIsActive ] = useState(false)

  function handleClick(){
    if( !isActive ){
      return setIsActive(true)
    } 
    setIsActive(false)
  }

  return (
    <FilterTypeStyled isActive={isActive} onClick={handleClick}>
      <span className='text'> {text} </span>
    </FilterTypeStyled>
  )
}

export default FilterType
