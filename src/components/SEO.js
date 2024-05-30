import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)
  // const { images } = site.siteMetadata
  const metaDescription = description || site.siteMetadata.description
  // const metaImage = images || `${siteUrl}${coverImage}`
  const imageha = image || '../assets/images/店頭/linkcover.jpg'
  return (
    <Helmet
      htmlAttributes={{ lang: 'zh-TW' }}
      title={`${title} | ${site.siteMetadata.title}`}
    >
      <meta
        name='keywords'
        content='#網美蛋糕 #抽錢蛋糕 #裸蛋糕 #氣球佈置 #婚禮蛋糕 #客製化浮誇蛋糕 #鮮花款式蛋糕 #羽毛皇冠蛋糕 #三重客製化蛋糕 #公仔蛋糕 #常溫蛋糕 #會議餐點 #淋面款式蛋糕 #夢幻蛋糕 #手做甜點 #各款式大福 #歐式麵包 #台式麵包 #各類口味吐司 #兩大外送平台合作 #三重甜點 #公館商圈 #公館麵包店 #台電大樓 #公館浮誇蛋糕 #八蒜包 #蒜蒜包 #公館餐盒'
      />
      <meta
        name='description'
        content='愛吃麵包，一家從1960年就開始傳承的麵包店，60年來始終秉持著對食材的堅持，嚴選最天然的材料，不添加人工香料或防腐劑，只為給顧客帶來最安心、健康的美味。'
      />
      {/* <meta name="image" content={metaImage} /> */}
      <link rel='image_src' href={image} />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-S6JL1Y87MB'
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-S6JL1Y87MB');
      </script>
    </Helmet>
  )
}

export default SEO
