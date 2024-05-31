import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Seo from '../components/SEO'
import Store from '../components/Store'
import Hire from '../components/Hire'
const About = () => {
  return (
    <Layout>
      <Seo title='關於愛吃麵包' image='../assets/images/店頭/linkcover.jpg' />
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>經營超過一甲子的糕餅店</h2>
            <p>
              愛吃麵包，一家從1960年就開始傳承的麵包店，60年來始終秉持著對食材的堅持，嚴選最天然的材料，不添加人工香料或防腐劑，只為給顧客帶來最安心、健康的美味。
            </p>
            <p>
              麵包都是每天新鮮製作，從麵糰揉製、發酵、烘烤，每個步驟都經過嚴謹的控管，只為呈現最完美、最道地的麵包風味。店內招牌的蒜蒜包，老婆餅，深受顧客喜愛。此外，愛吃麵包還提供多種甜點餅乾，滿足您的不同需求。
            </p>
            <Link to='/' className='btn'>
              回首頁
            </Link>
          </article>
          <StaticImage
            src='../assets/images/店頭/DSC09887.JPG'
            alt='關於愛吃麵包'
            className='about-img'
          />
        </section>
        <Hire />
        <Store />
      </main>
    </Layout>
  )
}

export default About
