import styled from 'styled-components'
import Icon from './icons'
import SelectorMobile from './Selector-mobile'
import { filtersDB } from '../assets/filters.database'
import { useEffect, useState } from 'react'



const ModalContentStyled = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--white);
  block-size: auto;

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    button{
      padding: 0;
      border: none;
      background: none;
    }

    .titles{
      display: flex;
      align-items: center;
      gap: .5rem;

      .title{
        margin: 0;
        gap: .5rem;
        font: var(--subtitle-22bold);
      }
    }
  }
`



function ModalContentMobile({setModal}) {
  let [ filters, setFilters ] = useState({})

  useEffect(() => {
    if(filtersDB){
      return setFilters(filtersDB)
    }
    return console.log('is loading')

  }, [])

  function handleClick(){
    setModal(false)
  }

  return (
    <ModalContentStyled>
      <div className='header'>
        <div className='titles'>    
          <Icon
            name="filter"
            size="24"
            color="var(--black)" 
          />
          <h2 className='title'>Total de filtros</h2>
        </div>
        <button onClick={handleClick}>
          <Icon
            name="close"
            size="24"
            color="var(--black)" 
          />
        </button>
      </div>

      <div className='filters-list'>
        <SelectorMobile text="Color"  list={filters.sizes}/>
        <SelectorMobile text="Tamaño" list={filters.colors}/>
      </div>
    </ModalContentStyled>
  )
}

export default ModalContentMobile

