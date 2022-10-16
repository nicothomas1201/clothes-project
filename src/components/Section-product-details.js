import styled from 'styled-components'

const SectionProductDetailsStyled = styled.div`
  font: var(--body-14regular);
  color: var(--black);
  inline-size: 100%;
  max-inline-size: 24rem;
`

function SectionProductDetails({text}) {
  return (
    <SectionProductDetailsStyled>
      {text}
    </SectionProductDetailsStyled>
    
  )
}

export default SectionProductDetails
