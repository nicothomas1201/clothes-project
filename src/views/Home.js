import Layout from "../components/Layout"
import Header from "../components/Header"
import ProductsList from '../components/Products-list'
import Details from '../components/Details'
import FilterTypeList from '../components/Filter-type-list'
import Filters from '../components/Filters'
import { useState } from "react"

function Home({ setModal }) {
  let [ search, setSearch ] = useState('')

  return (
    <>
      <Header setModal={setModal} setSearch={setSearch} />
      <Layout>
        <Details />
        <FilterTypeList />
        <Filters setModal={setModal}/>
        <ProductsList search={search} />
      </Layout>    
    </>
  )
}

export default Home
