import styled from 'styled-components'
import Icon from './icons'

const ButtonFilterMobileStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--body-16regular);
  color: var(--black);
  background-color: var(--white);
  gap: .25rem;
  padding: .5rem 1rem;
  border-radius: 1.875rem;
  border: 2px solid var(--black);

  @media screen and (min-width: 878px){
    display: none;
  }
`

function ButtonFilterMobile({ setModal }) {
  function handleClick(){
    setModal({isActive: true, mobile: true})
  }
  return (
    <ButtonFilterMobileStyled onClick={handleClick}>
      <Icon 
        name='filter' 
        color='var(--black)' 
        size='24' 
      />
      <span>Filtros</span>
    </ButtonFilterMobileStyled>
    
  )
}

export default ButtonFilterMobile
