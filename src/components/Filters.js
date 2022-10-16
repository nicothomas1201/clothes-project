import styled from 'styled-components'
import Switch from './Switch'
import Selector from './Selector'
import { filtersDB } from '../assets/filters.database'
import { useState, useEffect } from 'react'
import ButtonFilterMobile from './Button-filter-mobile'

const FiltersStyled = styled.div`
  display: flex;
  margin-block-end: 1rem;
  justify-content: space-between;
  margin-block-start: 1rem;
  align-items: center;
  /* overflow: auto; */
  
  .filters{
    display: none;
  }
  
  @media screen and (min-width: 878px){
    display: flex;
    margin-block: 1.25rem;
    .filters{
      display: flex;
      gap: 2rem;
    }
  }
`

function Filters({ setModal }) {
  let [ filters, setFilters ] = useState({})

  useEffect(() => {
    if(filtersDB){
      return setFilters(filtersDB)
    }
    return console.log('is loading')

  }, [])



  return (
    <FiltersStyled>
      <ButtonFilterMobile setModal={setModal} />
      <div className='filters'>
        <Selector text="Color" list={filters.colors} />
        <Selector text="Tamaño" list={filters.sizes} />
        <Selector text="Categoria" />
      </div>
      <Switch />
    </FiltersStyled>
    
  )
}

export default Filters
