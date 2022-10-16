import styled from 'styled-components'
import FilterType from './Filter-type'

const FilterTypeListStyled = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding-block-start: 1.25rem;
  padding-block-end: 1.25rem;
  overflow: auto;

  @media screen and (min-width: 878px){
    padding-block-end: 0;
  }

`

function FilterTypeList() {
  return (
    <FilterTypeListStyled>
      <FilterType text="Todo" />
      <FilterType text="Sudaderas" />
      <FilterType text="Pantalones" />
      <FilterType text="Bermudas" />
    </FilterTypeListStyled>
    
  )
}

export default FilterTypeList
