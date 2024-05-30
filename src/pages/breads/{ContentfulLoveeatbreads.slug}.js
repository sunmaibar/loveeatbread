import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import FeaturedBreads from '../../components/FeaturedBreads'
import FeaturedCakes from '../../components/FeaturedCakes'
import Seo from '../../components/SEO'
const BreadTemplate = ({ data }) => {
  const { product, price, type, description, images } =
    data.contentfulLoveeatbreads
  const pathToImage = getImage(images[0])
  const desc = renderRichText(description)
  console.log(desc)
  return (
    <Layout>
      <Seo title={product} image={pathToImage.images.fallback.src} />
      <main className='page'>
        <div className='recipe-page'>
          {/* hero */}
          <section className='recipe-hero'>
            <GatsbyImage
              image={pathToImage}
              alt={product}
              className='about-img'
            />
            <article className='recipe-info'>
              <h2>{product}</h2>
              <h5>售價：${price}元</h5>
              <p>{desc}</p>
              {type.includes('蛋糕') ? (
                <p>
                  蛋糕尺寸為6/8/10/12/14寸，標價皆以6寸為主，請提前3-7天預訂
                </p>
              ) : (
                <>
                  <p>麵包出爐時間：每日上午8時，下午2時，每日新鮮現做</p>
                  <p>歐式麵包任選三個100元</p>
                  <p>售價因分店不同而略有差異，實際以店面販售價格為主</p>
                </>
              )}
              {/* tags */}
              <p className='recipe-tags'>
                Tags :{' '}
                {type.map((item, index) => {
                  return (
                    <Link to={`/${item}`} key={index}>
                      {item}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className='recipe-content'>
            {images.slice(1).map((img, idx) => {
              const pathToImage = getImage(img)
              return <GatsbyImage key={idx} image={pathToImage} />
            })}
          </section>
        </div>
        <FeaturedBreads />
        <FeaturedCakes />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleBread($slug: String) {
    contentfulLoveeatbreads(slug: { eq: $slug }) {
      product
      slug
      price
      type
      description {
        raw
      }
      images {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
export default BreadTemplate
