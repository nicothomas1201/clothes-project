import styled from 'styled-components'
import Icon from './icons'
import SelectContent from './Select-content'
import { useState } from 'react'

const SelectorStyled = styled.div`
  font: var(--body-16regular);
  display: flex;
  align-items: center;
  gap: .25rem;
  cursor: pointer;
  position: relative;
`

function Selector({ text, list }) {
  let [ isActive, setIsActive ] = useState(null)

  function handleMouseEnter(){
    setIsActive(true)
  }

  function handleMouseLeave(){
    setIsActive(false)
  }

  return (
    <SelectorStyled onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>{text}</span>
      <Icon name="down" size="24"  color="var(--black)"/>
      {list ? <SelectContent isActive={isActive} options={list} /> : null}
    </SelectorStyled>
    
  )
}

export default Selector
