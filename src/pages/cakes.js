import React from 'react'
import Layout from '../components/Layout'
import AllCakeList from '../components/AllCakeList'
const Cakes = () => {
  return (
    <Layout>
      <main className='page'>
        <AllCakeList />
      </main>
    </Layout>
  )
}
export default Cakes
