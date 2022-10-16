import styled from 'styled-components'
import Icon from './icons'
import { useState } from 'react'
import CauntityAdd from './Cauntity-add'
import { useCartContext } from '../contexts/shopping-cart-context'

const ProductShoppingCartStyled = styled.div`
  display: flex;
  color: var(--black);
  justify-content: space-between;
  gap: 1rem;
  margin-block-end: .5rem;

  .details{
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .actions{
      display: flex;
      justify-content: space-between;
    }

    .description{
      margin: 0;
      font: var(--body-16regular);
    }
  
    .price{
      font: var(--body-16bold);
    }

    button{
      background: none;
      padding: 0;
      border: none;
      cursor: pointer; 
    }
  }

  .null{
    font: var(--body-14regular);
    color: var(--grey-3);
  }

`

function ProductShoppingCart() {
  let [cuantity, setCuantity] = useState(1)
  let { cart ,setCart } = useCartContext()

  function deleteCart(){
    setCart(null)
  }

  return (
    <ProductShoppingCartStyled>
      {!cart ? <span className='null'>No tienes nada en el carrito</span> : (
        <>
          <img src={cart.image} alt='' height='144' width='108'/>
          <div className='details'>
            <p className='description'>{cart.description}</p>
            <span className='price'>{cart.price}</span>
            <div className='actions'>
              <CauntityAdd 
                cuantity={cuantity}
                setCuantity={setCuantity} />
              <button
                onClick={deleteCart}
              >
                <Icon
                  name='trash'
                  color='var(--black)' 
                  size='24'
                />
              </button>
            </div>
          </div>
        </>
      )}
    </ProductShoppingCartStyled>
    
  )
}

export default ProductShoppingCart
