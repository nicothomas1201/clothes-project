import styled from 'styled-components'

const OverlayStyled = styled.div`
  /* backdrop-filter: blur(10px); */
  background-color: #000000A8;  
  position: fixed;
  inset: 0;
  /* scroll-behavior: auto; */
`

function Overlay({ children }) {
  return (
    <OverlayStyled>
      {children}
    </OverlayStyled>
    
  )
}

export default Overlay