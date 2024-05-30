import React from 'react'
import Layout from '../components/Layout'
import AllCakeList from '../components/AllCakeList'
import Seo from '../components/SEO'
const Cakes = () => {
  return (
    <Layout>
      <Seo title={'生日蛋糕'} image='../assets/images/店頭/linkcover.jpg' />
      <main className='page'>
        <AllCakeList />
      </main>
    </Layout>
  )
}
export default Cakes
