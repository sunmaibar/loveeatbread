import React from 'react'
import Layout from '../components/Layout'
import AllCakeList from '../components/AllCakeList'
import SEO from '../components/SEO'
const Cakes = () => {
  return (
    <Layout>
      <SEO title={'愛吃麵包'} image='../assets/images/店頭/linkcover.jpg' />
      <main className='page'>
        <AllCakeList />
      </main>
    </Layout>
  )
}
export default Cakes
