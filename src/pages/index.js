import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import FeaturedBreads from '../components/FeaturedBreads'
import FeaturedCakes from '../components/FeaturedCakes'
import Seo from '../components/SEO'
import Slogn from '../components/Slogn'
export default function Home() {
  return (
    <Layout>
      <Seo title={'歡迎光臨'} />
      <main className='page'>
        <header className='hero'>
          <StaticImage
            src='../assets/images/main.jpeg'
            alt='食材'
            className='hero-img'
            layout='fullWidth'
          />
          <div className='hero-container'>
            <div className='hero-text'>
              <h2>歡迎光臨愛吃麵包</h2>
              <h5>吃在嘴裡甜在心裡</h5>
            </div>
          </div>
        </header>
        <Slogn />
        <FeaturedBreads />
        <FeaturedCakes />
      </main>
    </Layout>
  )
}
