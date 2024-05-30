import React from 'react'
import Layout from '../components/Layout'
import AllDessertList from '../components/AllDessertList'
import Seo from '../components/SEO'
const Dessert = () => {
  return (
    <Layout>
      <Seo title={'吃甜甜'} image='../assets/images/店頭/linkcover.jpg' />
      <main className='page'>
        <AllDessertList />
      </main>
    </Layout>
  )
}
export default Dessert
