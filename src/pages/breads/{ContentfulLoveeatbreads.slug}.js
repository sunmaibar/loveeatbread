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
              <p>{description ? renderRichText(description) : null}</p>
              {type.includes('蛋糕') ? (
                <>
                  <p>
                    蛋糕皆可客製化，能依照客戶的顏色及圖案做調整，水果依照當令時節為主，請洽櫃檯人員
                    ☎️02-2975-9666
                  </p>
                  <p>
                    蛋糕尺寸大多為6-8吋，網站標價皆以6吋為主，最大尺寸能到20吋，請提前3天預訂
                  </p>
                  <p>
                    原物料價格波動快速，產品不定時調整售價，產品價格以店內架上為主，網站更新速度較慢，價格僅供參考。
                  </p>
                </>
              ) : (
                <>
                  <p>
                    店內麵包選擇高達八十多種，每日新鮮現做，不定時舉辦優惠活動，歡迎光臨來店選購。我們也有配合Ubereats，Foodpanda外送平台喔。
                  </p>
                  <p>
                    原物料價格波動快速，產品不定時調整售價，產品價格以店內架上為主，網站更新速度較慢，價格僅供參考。
                  </p>
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
