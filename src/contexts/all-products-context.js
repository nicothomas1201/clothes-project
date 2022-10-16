import { useState, useContext, createContext } from "react";

const ProductsContext = createContext()

export function ProductsContextProvider({children}){
  const [products, setProducts] = useState(null)
  // const [valueSearch, setValueSearch] = useState(null)
  return(
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProductsContext(){
  const context = useContext(ProductsContext)
  if(!context) throw new Error('useCartaContext must be use within a UserContextProvider')
  return context
}