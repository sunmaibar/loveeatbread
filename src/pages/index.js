import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import FeaturedBreads from '../components/FeaturedBreads'
import FeaturedCakes from '../components/FeaturedCakes'
import Seo from '../components/SEO'
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
              <StaticImage
                src='../assets/images/landingTitle.png'
                alt='title'
                height={75}
              />
            </div>
          </div>
        </header>
        <FeaturedBreads />
        <FeaturedCakes />
      </main>
    </Layout>
  )
}
