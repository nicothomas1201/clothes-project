import styled from 'styled-components'
import Icon from './icons'
import { useState } from 'react'

const SearchInputStyled = styled.form`
  display: flex;
  align-content: center;
  max-inline-size: 14.5625rem;
  gap: .25rem;
  border: 1px solid var(--grey-3);
  padding: .5rem;
  border-radius: 3.75rem;
  box-sizing: border-box;
  inline-size: 14rem;
  .input{
    border: none;
    outline: none;
  }

  & button{
    ${({activeIcon}) => {
      if(activeIcon){
        return {
          display: 'block',
        }
      }

      return {
        display: 'none',
      }
    }}
    padding: 0;
  }

`

function SearchInput({ setSearch }) {
  let [activeIcon, setActiveIcon ] = useState(false)
  let [ valueInput, setValueInput ] = useState('')

  function handleChange(e){
    setValueInput(e.target.value)
    setSearch(e.target.value)
    if(e.target.value !== ''){
      return setActiveIcon(true)
    }
    
    return setActiveIcon(false)
  }

  function handleSubmit(e){
    e.preventDefault()
  }

  function handleClick(){
    setActiveIcon(false)
    setValueInput('')    
  }

  return (
    <SearchInputStyled 
      activeIcon={activeIcon}
      onSubmit={handleSubmit}>
      <Icon name="search" />
      <input className='input' value={valueInput} name='search' onChange={handleChange} type="text" placeholder="busca"/>
      <button onClick={handleClick}>
        <Icon name='close' />
      </button>
    </SearchInputStyled>
    
  )
}

export default SearchInput
