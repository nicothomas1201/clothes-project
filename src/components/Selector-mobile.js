import styled from 'styled-components'
import Icon from './icons'
import SelectOption from './Select-option'
import { useState } from 'react'

const SelectorMobileStyled = styled.div`
  .select{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    span{
      font: var(--body-16regular);
      color: var(--black);
    }
  }

  .options{
    max-block-size: 0;
    background: var(--white);
    overflow: hidden;
    transition: padding .5s linear;
    padding: 0rem;
    box-sizing: border-box;
    /* margin: 1rem; */

    ${({show}) => {
      if(show){
        return {
          maxBlockSize: '100%',
          padding: '1rem',
        }
      }
    }}
  }


`

function SelectorMobile({text, list}) {

  let [ show, setShow ] = useState(false)

  function handleTouch(){
    if(!show){
      setShow(true)
    } else{
      setShow(false)
    }
  }

  return (
    <SelectorMobileStyled show={show}>
      <div className='select' onTouchStart={handleTouch}>
        <span>{text}</span>
        <Icon
          name="down"
          color="var(--black)"
          size="24"
        />
      </div>
      <div className='options'>
        {list ? list.map((item, index) => <SelectOption key={index} option={item}/>) : null}
      </div>
    </SelectorMobileStyled>
    
  )
}

export default SelectorMobile
