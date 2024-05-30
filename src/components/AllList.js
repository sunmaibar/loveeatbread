import React from 'react'
import BreadsList from './BreadsList'
import TagsList from './TagsList'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
const AllList = () => {
  const data = useStaticQuery(query)
  const breads = data.allContentfulLoveeatbreads.nodes

  return (
    <Wrapper>
      <TagsList breads={breads} />
      <div className='line-gap'></div>

      <h5>共有{data.allContentfulLoveeatbreads.totalCount}樣商品</h5>
      <BreadsList breads={breads} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 2rem 1rem;
  @media screen and (min-width: 992px) {
    /* grid-template-columns: 200px 1fr; */
    gap: 1rem;
  }
`

const query = graphql`
  {
    allContentfulLoveeatbreads(
      filter: { type: { eq: "麵包" } }
      sort: { price: ASC }
    ) {
      nodes {
        type
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

export default AllList
