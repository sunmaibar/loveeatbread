import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BreadsList from '../components/BreadsList'
// import CakeList from '../components/CakeList'

const TypeTemplate = ({ data, pageContext }) => {
  const breads = data.allContentfulLoveeatbreads.nodes
  return (
    <Layout>
      <main className='page'>
        <h2>{pageContext.type}</h2>
        <div className='tag-recipes'>
          <BreadsList breads={breads} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByType($type: String) {
    allContentfulLoveeatbreads(
      sort: { price: ASC }
      filter: { type: { eq: $type } }
    ) {
      nodes {
        type
        id
        product
        price
        slug
        images {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      totalCount
    }
  }
`
export default TypeTemplate
