import styled from 'styled-components'


const LayoutStyled = styled.div`
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;


  @media screen and (min-width: 878px){
    max-inline-size: 75rem;
    margin: auto;
  }
`

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout
