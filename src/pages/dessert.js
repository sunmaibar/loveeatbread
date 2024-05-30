import React from 'react'
import Layout from '../components/Layout'
import AllDessertList from '../components/AllDessertList'
const Dessert = () => {
  return (
    <Layout>
      <main className='page'>
        <AllDessertList />
      </main>
    </Layout>
  )
}
export default Dessert
