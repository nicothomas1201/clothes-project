import styled from 'styled-components'
import SelectCheck from './Select-check'

const SelectOptionStyled = styled.div`
  display: flex;
  gap: .5rem;
  padding: .625rem .5rem;
  align-items: center;

  .option{
    font: var(--body-14regular);
    color: var(--black);
  }
`

function SelectOption({option}) {
  return (
    <SelectOptionStyled>
      <SelectCheck />
      <span className='option'>{option}</span>
    </SelectOptionStyled>
    
  )
}

export default SelectOption
