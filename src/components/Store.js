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
          <p>🏠新北市三重區重新路三段20號</p>
          <p>☎️02-29759666</p>
          <p>⏰AM07:30-22:00</p>
        </article>
      </section>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  margin-top: 50px;
`

export default Store
