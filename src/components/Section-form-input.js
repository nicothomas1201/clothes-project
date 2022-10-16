import styled from 'styled-components'

const SectionFormInputStyled = styled.div`
  font: var(--body-14regular);
  display: flex;
  flex-direction: column;
  gap: .5rem;
  
  label{
    color: #333333;
  }

  input{
    color: var(--black);
    padding: .56rem .75rem;
    border: 1px solid #3C42571F;
    box-shadow: 0px 1px 1px 0px #0000000A;
    box-shadow: 0px 2px 5px 0px #00000014;
    border-radius: .5rem;
    outline: none;
  }

`

function SectionFormInput({label, id, type, placeholder, value, state, setState}) {
  function handleChange(e){
    let value = e.target.value
    setState({ ...state, [id]: value })
  }

  return (
    <SectionFormInputStyled>
      <label htmlFor={id}>
        {label}
      </label>
      <input 
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange} />
    </SectionFormInputStyled>
    
  )
}

export default SectionFormInput
