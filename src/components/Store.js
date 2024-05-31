import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Store = () => {
  return (
    <Wrapper>
      <section className='about-page'>
        <StaticImage src='../assets/images/店頭/DSC09839.JPG' alt='三重店' />
        <article>
          <h4>三重店</h4>
          <p>新北市三重區重新路三段20號</p>
          <p>02-2975-9666</p>
        </article>
      </section>
      <section className='about-page'>
        <StaticImage src='../assets/images/店頭/DSC09754.JPG' alt='公館店' />
        <article>
          <h4>公館店</h4>
          <p>台北市中正區汀州路三段293之1號</p>
          <p>02-2366-0616</p>
        </article>
      </section>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  margin-top: 50px;
`

export default Store
