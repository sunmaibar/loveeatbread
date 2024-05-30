import React from 'react'
import Layout from '../components/Layout'
import AllDessertList from '../components/AllDessertList'
import SEO from '../components/SEO'
const Dessert = () => {
  return (
    <Layout>
      <SEO title={'愛吃麵包'} image='../assets/images/店頭/linkcover.jpg' />
      <main className='page'>
        <AllDessertList />
      </main>
    </Layout>
  )
}
export default Dessert
