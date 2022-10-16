import styled from 'styled-components'
import Icon from './icons'

const CauntityAddStyled = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  background-color: #FEFEFE;
  box-shadow: 0px 11px 29px rgba(0, 0, 0, 0.05);
  border-radius: .5rem;
  padding: .5rem;
`

function CauntityAdd({cuantity, setCuantity}) {

  function handleClick(math){
    if(math === 'plus'){
      return setCuantity(cuantity++)
    }

    return setCuantity(cuantity--)

  }

  return (
    <CauntityAddStyled>
      <button  
        onClick={() => handleClick('minus')}
        disabled={cuantity === 1 ? true : false}
        style={{display: 'flex'}}>
        <Icon 
          name='minus'
          color={cuantity === 1 ? 'var(--grey)': 'var(--black)'}
        />
      </button>
      <span>{cuantity}</span>
      <button
        onClick={() => handleClick('plus')}>
        <Icon 
          name='plus'
          color='var(--black)'
          size='14'
        />
      </button>
    </CauntityAddStyled>
    
  )
}

export default CauntityAdd
