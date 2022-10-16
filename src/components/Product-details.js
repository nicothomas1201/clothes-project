import styled from 'styled-components'
import ColorSelect from './Color-select'
import SizeSelect from './Size-select'
import Button from './Button'
import DetailsList from './Details-list'

const ProductDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .titles{
    margin-block-end: 1.25rem
  }

  .titles > *{
    margin: 0;
  }

  .titles h2{
    font: var(--subtitle-22medium);
    margin-block-end: 1rem;
  }

  .titles span{
    font: var(--body-16bold);
  } 

  .colors-list{
    display: flex;
    gap: .25rem;
  }

  .colors-title{
    font: var(--body-16regular);
    margin: 0;
    margin-block-end: .5rem;
  }

  .size-list{
    display: flex;
    gap: .5rem;
  }

  .sizes-title{
    font: var(--body-16regular);
    margin: 0;
    margin-block-end: .5rem;
  }

`

function ProductDetails({name, colors, price, sizes, description, shipping, setAddCart}) {

  function handleClick(){
    setAddCart(true)
    alert('agregado al carrito')
  }

  return (
    <ProductDetailsStyled>
      <div className='titles'>
        <h2>{name}</h2>
        <h3>{price}</h3>
      </div>
      <div className='colors'>
        <h3 className='colors-title'>Colors</h3>
        <div className='colors-list'>
          {colors.map((color, index) => <ColorSelect color={color} key={index} />)}
        </div>
      </div>
      <div className='sizes'>
        <h3 className='sizes-title'>Tamaño</h3>
        <div className='size-list'>
          {sizes.map(( size, index ) => <SizeSelect text={size} key={index} />)}
        </div>
      </div>
      <Button 
        handleClick={handleClick}
        isActive 
        text="Añadir al carrito" 
      />
      <DetailsList description={description}
        sizes={sizes}
        shipping={shipping}
        />
    </ProductDetailsStyled>
    
  )
}

export default ProductDetails
