import React from 'react'
import styled from 'styled-components'
const Hire = () => {
  return (
    <Wrapper>
      <div className='hire'>
        {/* <h3>用心經營，廣受各界好評</h3> */}

        <p>
          愛吃麵包是一間位於三重重新路三段上的麵包店，每日提供新鮮現做的麵包，品項高達上百種，產品多元，歡迎光臨愛吃麵包。
        </p>
      </div>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  display: flex;
  background: var(--primary-50);

  .hire {
    width: 90vw;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
  }

  @media screen and (min-width: 992px) {
    .hire {
      width: 60vw;
    }
  }
`
export default Hire
