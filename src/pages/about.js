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
            <h2>經營超過一甲子的麵包店</h2>
            <p>
              愛吃麵包是一間兼具傳統與創新的麵包店，已經在地經營超過六十年以上，目前由第二代負責營運，由於本身也是烘焙材料的中盤商，所以我們用料毫不手軟，客人給我們的回饋經常都是餡料飽滿，口感扎實。老闆本身對美食也相當講究，不斷的研發與試吃，要來滿足客戶挑惕的味蕾。
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
