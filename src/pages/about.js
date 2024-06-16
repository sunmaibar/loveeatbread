import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Seo from '../components/SEO'
import Store from '../components/Store'
import Hire from '../components/Hire'
import styled from 'styled-components'
const About = () => {
  return (
    <Layout>
      <Seo title='關於愛吃麵包' image='../assets/images/店頭/linkcover.jpg' />
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>經營超過一甲子的麵包店</h2>
            <p>
              愛吃麵包是一間兼具傳統與創新的麵包店，已經在地經營超過六十年以上，目前由第二代負責營運，由於我們本身也是烘焙材料的中盤商，所以我們用料毫不手軟，客人給我們的回饋經常都是餡料飽滿，口感扎實。老闆本身對美食也相當講究，不斷的研發與試吃，要來滿足客戶挑惕的味蕾。
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
        <Wrapper className='about-page'>
          <StaticImage
            src='../assets/images/店頭/DSC09839.JPG'
            alt='愛吃麵包'
            className='about-img'
          />
          <StaticImage
            src='../assets/images/店頭/DSC09840.JPG'
            alt='愛吃麵包'
            className='about-img'
          />
        </Wrapper>
        <Hire />
        <Store />
      </main>
    </Layout>
  )
}

export default About

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 992px) {
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
  }
`
