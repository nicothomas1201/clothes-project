import { useState, useContext, createContext } from "react";

const ShoppingContext = createContext()

export function ShoppingContextProvider({children}){
  const [cart, setCart] = useState(null)
  // const [valueSearch, setValueSearch] = useState(null)
  return(
    <ShoppingContext.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export function useCartContext(){
  const context = useContext(ShoppingContext)
  if(!context) throw new Error('useCartaContext must be use within a UserContextProvider')
  return context
}