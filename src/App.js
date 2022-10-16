import Home from "./views/Home"
import { useEffect } from "react"
import DB from "./assets/database"
import { useProductsContext } from "./contexts/all-products-context"
import {Routes, Route} from "react-router-dom"
import Product from "./views/Product"
import Modal from "./components/Modal"
import { useState } from "react"


function App() {
  let {  setProducts } = useProductsContext()
  let [ isActive, setModal ] = useState(false)

  useEffect(( ) => {
    if(DB){
      return setProducts(DB)
    }
    console.log('is loading')
  }, [DB])



  return (
    <>
      <Routes>
        <Route path="/" element={ <Home setModal={setModal}/> }/>
        <Route path="/:productId" element={<Product setModal={setModal}/>} />
      </Routes>
      <Modal isActive={isActive} setModal={setModal} />
    </>
  )
}

export default App
