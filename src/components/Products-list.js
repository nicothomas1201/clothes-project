import styled from 'styled-components'
import ProductCard from './Product-card'
import { useProductsContext } from '../contexts/all-products-context'


const ProductsListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 24rem);
  grid-template-rows: repeat(3, max-content);
  grid-auto-rows: min-content;
  align-items: center;
  place-content: center;
  grid-column-gap: 1.25rem;
  grid-row-gap: 5rem;
  margin-block-end: 2.5rem;
`

function ProductsList({ search }) {
  let { products } = useProductsContext()
  let productsList = products


  if(productsList){
    if(search !== ''){
      productsList = products.filter( product => {
        let name = product.name.toLowerCase()
        return name.search(search.toLowerCase()) >= 0
      })
    }
  }

  return (
    <ProductsListStyled>
      {productsList ? productsList.map( product => <ProductCard
        src={product.image}
        name={product.name}
        price={product.price}
        description={product.description}
        colors={product.colors}
        id={product.id}
        key={product.id}
      /> ) : null}
    </ProductsListStyled>
    
  )
}

export default ProductsList
