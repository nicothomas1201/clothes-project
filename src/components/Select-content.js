import styled from 'styled-components'
import SelectOption from './Select-option'

const SelectContentStyled = styled.div`
  position: absolute;
  background: var(--white);
  top: 0;
  left: 0;
  margin-block-start: 1.7rem;
  /* box-shadow: 0px 2.419753074645996px 50.814815521240234px 0px #00000040; */
  box-shadow: 4px 4px 40px #00000040;
  border-radius: .5rem;
  /* inline-size: 100%; */
  inline-size: 150px;
  ${({isActive}) => {
    if(isActive){
      return 'display: block;'
    } 

    return 'display: none;'
  }}
`

function SelectContent({options, isActive}) {
  return (
    <SelectContentStyled isActive={isActive}>
      {/* Va a renderiza la lista de opciones */}
      {options ? options.map(( option, index ) => {
        return <SelectOption option={option} key={index} />
      } ) : <span>Is loading...</span>}
      
    </SelectContentStyled>
    
  )
}

export default SelectContent
