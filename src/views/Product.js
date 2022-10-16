import styled from 'styled-components'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { useProductsContext } from '../contexts/all-products-context'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductDetails from '../components/Product-details'
import { useCartContext } from '../contexts/shopping-cart-context'

const ProductStyled = styled.div`
  margin-block-end: 5rem;
  .product-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    @media screen and (min-width: 878px){
      flex-direction: row;
      gap: 1.25rem;

    }
  }
`

function Product({ setModal }) {
  let { productId } = useParams()
  let { products } = useProductsContext()
  let [ product, setProduct ] = useState(null)
  let [ addCart, setAddCart ] = useState(false)
  let { cart, setCart } = useCartContext()

  useEffect(() => {
    if(products){
      setProduct(products.filter( product => product.id === parseInt(productId)))
      if(addCart){
        setCart({
          image: product[0].image,
          description: product[0].description,
          price: product[0].price,
        })
      }
    } else {
      console.log('is loading')
    }
  }, [productId, products, addCart])


  if(product){
    return (
      <ProductStyled>
        <Header setModal={setModal} />
        <Layout>
          <div className='product-container'>
            <img src={product[0].image} alt=""/>
            <ProductDetails 
              setAddCart={setAddCart}
              name={product[0].name} 
              colors={product[0].colors}
              price={product[0].price}
              sizes={product[0].sizes}
              description={product[0].description_large}
              shipping={product[0].shipping}
              />
          </div>
        </Layout>
      </ProductStyled>
      
    )
  } else{
    return <p>Is loading</p>
  }
}

export default Product
