import styled from 'styled-components'
import Button from './Button'

const ModalContentBoughtStyled = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  & img{
    vertical-align: middle;
  }
  & h3{
    font: var(--subtitle-22medium);
    color: #332927;
    margin: 0;
  }

`

function ModalContentBought({handleClick}) {
  return (
    <ModalContentBoughtStyled>
      <img src='./images/credit-card.png' alt='' width='413' height='265' />
      <h3>¡Gracias por tu compra!</h3>
      <Button 
        isDisabled={false}
        isActive={true}
        handleClick={handleClick} 
        text="Seguir Comprando" />
    </ModalContentBoughtStyled>
    
  )
}

export default ModalContentBought
