import styled from 'styled-components'

const ButtonStyled = styled.button`
  font: var(--body-16regular);
  padding-block-start: 1rem;
  padding-block-end: 1rem;
  color: var(--white);
  text-align: center;
  /* cursor: pointer; */
  cursor: pointer;
  inline-size: 100%;
  border: none;

  ${({isActive}) => {
    if(isActive){
      return {
        background: 'var(--green-2)',
      }
    }

    return {
      background: 'var(--grey-3)',
    }
  }}
`

function Button({text, isActive, isDisabled = false, states = null, handleClick = null}) {
  
  if(states){
    for( let value in states){
      if(states[value] === ""){
        isDisabled = true
        isActive = false
      } else {
        isDisabled = false
        isActive = true        
      }

    } 

    // let isComplete = values.find(item => item === '')
    // console.log(isComplete)
    // if(isComplete.length !== 0){
    //   isActive = false
    //   isDisabled = true
    // } else {
    //   isActive = true
    //   isDisabled = false
    // }

  }
  
  // console.log(handleClick)
  return (
    <ButtonStyled 
      onClick={handleClick}
      disabled={isDisabled}
      isActive={isActive}>
      {text}
    </ButtonStyled>
    
  )
}

export default Button
