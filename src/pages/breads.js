import React from 'react'
import Layout from '../components/Layout'
import AllList from '../components/AllList'
import SEO from '../components/SEO'
const Breads = () => {
  return (
    <Layout>
      <SEO title={'愛吃麵包'} image='../assets/images/店頭/linkcover.jpg' />
      <main className='page'>
        <AllList />
      </main>
    </Layout>
  )
}
export default Breads
