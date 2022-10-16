import styled from 'styled-components'

const DetailsStyled = styled.div`
  .details-title{
    font: var(--subtitle-22bold);
    margin: 0;
    margin-block-end: 1rem;
  }

  .details-description{
    font: var(--body-16regular);
    margin: 0;
    margin-block-end: 1.25rem;
  }
`

function Details() {
  return (
    <DetailsStyled>
      <h1 className='details-title'>Ropa para Hombre</h1>
      <p className='details-description'>
        ¿Manteniendo abiertas sus opciones? Descubra todo en un solo lugar.
        Compre nuestra ropa masculina favorita con chaquetas, 365 esenciales, 
        accesorios y más. Hay muchos estilos que se adaptan a todos sus deseos y necesidades.
      </p>
    </DetailsStyled>
    
  )
}

export default Details
