import React from 'react'
import Layout from '../components/Layout'
import AllList from '../components/AllList'
import Seo from '../components/SEO'
const Breads = () => {
  return (
    <Layout>
      <Seo title={'滿滿的麵包'} image='../assets/images/店頭/linkcover.jpg' />
      <main className='page'>
        <AllList />
      </main>
    </Layout>
  )
}
export default Breads
