import styled from 'styled-components'
import ColorSelect from './Color-select'
import { useNavigate } from 'react-router-dom'

const ProductCardStyled = styled.div`
  font: var(--body-16regular);

  img{
    vertical-align: middle;
    inline-size: 100%;
    max-inline-size: 24rem;
    block-size: auto;
    object-fit: cover;
    cursor: pointer;
  }

  .product-details{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .product-price{
    font: var(--body-16bold);
  }

  .description-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .color-list{
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`

function ProductCard({src, id, name, colors, description, price}) {
  let navigation = useNavigate()

  function handleClick(){
    navigation(`/${id}`)
  }

  return (
    <ProductCardStyled>
      <img src={src} alt="" width="384" height="512" onClick={handleClick}  />
      <div className='product-details'>
        <span className='product-name'>{name}</span>
        <div className='color-list'>
          { colors ? colors.map( (color , index) => <ColorSelect color={color} key={index} /> ) : null}
        </div>
        <div className='description-container'>
          <span className='product-description'>{description}</span>
          <span className='product-price'>{price}</span>
        </div>
      </div>
    </ProductCardStyled>
    
  )
}

export default ProductCard
