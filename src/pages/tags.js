import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import setUpTags from '../utils/setUpTags'

const Tags = () => {
  const data = useStaticQuery(query)
  const newTags = setUpTags(data.allContentfulLoveeatbreads.nodes)

  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {newTags.map((tag, index) => {
            const [text, value] = tag

            return (
              <Link to={`/${text}`} key={index} className='tag'>
                <h5>{text}</h5>
                <p>{value}樣產品</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

const query = graphql`
  query {
    allContentfulLoveeatbreads {
      nodes {
        type
      }
    }
  }
`

export default Tags
