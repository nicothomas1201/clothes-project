import styled from 'styled-components'
import { useState } from 'react'

const SwitchStyled = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
  inline-size: 100%;
  max-inline-size: 7.5rem;

  .name{
    font: var(--body-14regular);
  }

  .button{
    inline-size: 100%;
    max-inline-size: 3.25rem;
    block-size: 1.75rem;
    ${({isActive}) => {
      if(isActive){
        return {
          /* left: '0', */
          background: 'var(--green-1)',
        }
      }
      return {
        background: 'var(--grey-3)',
      }
    }}
    border-radius: 2.1875rem;
    position: relative;
  }
  .circle{
    inline-size: 100%;
    inline-size: 1.375rem;
    block-size: 1.375rem;
    background-color: var(--white);
    border-radius: 50%;
    position: absolute;
    top: .1875rem;
    ${({isActive}) => {
      if(isActive){
        return {
          /* left: '0', */
          right: '.1875rem',
        }
      }
      return {
        right: '0',
        left: '.1875rem',
      }
    }}
    transition: .5s left linear;
    cursor: pointer;
  }


`

function Switch() {
  let [ isActive, setIsActive ] = useState(false)


  function handleClick(){
    if(!isActive){
      return setIsActive(true)
    } 
    return setIsActive(false)
  }

  return (
    <SwitchStyled isActive={isActive} >
      <span className='name'>En stock</span>
      <span className='button'>
        <div className='circle' onClick={handleClick}></div>
      </span>
    </SwitchStyled>
    
  )
}

export default Switch
