import React from 'react'
import styled from 'styled-components'
const Hire = () => {
  return (
    <Wrapper>
      <div className='hire'>
        <h3>人才招募中</h3>
        <p>
          我們正在招募門市人員，內場麵包師傅，二手，二手頭，我們重視每位員工，提供良好的工作環境，請透過104人力銀行投遞履歷，我們將會安排面試。
        </p>
        <button className='btn'>
          <a href='https://www.104.com.tw/company/1a2x6bm8dt'>
            前往104人力銀行
          </a>
        </button>
      </div>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  display: flex;
  .hire {
    width: 60vw;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 992px) {
    margin-top: 150px;
  }
`
export default Hire
