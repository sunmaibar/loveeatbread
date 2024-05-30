import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BreadsList from './BreadsList'
import styled from 'styled-components'
const FeaturedCakes = () => {
  const data = useStaticQuery(query)
  const breads = data.allContentfulLoveeatbreads.nodes
  return (
    <Wrapper>
      <h4>精選蛋糕</h4>

      <BreadsList breads={breads} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  text-align: center;
  background: var(--grey-50);
  margin-bottom: 20px;
  h4 {
    color: var(--primary-700);
  }
`

const query = graphql`
  {
    allContentfulLoveeatbreads(
      filter: { type: { eq: "蛋糕" }, featured: { eq: true } }
      sort: { price: ASC }
    ) {
      nodes {
        id
        product
        slug
        price
        images {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      totalCount
    }
  }
`
export default FeaturedCakes
