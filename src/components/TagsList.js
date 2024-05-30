import React from 'react'
import setUpTags from '../utils/setUpTags'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TagsList = ({ breads }) => {
  const newTags = setUpTags(breads)

  return (
    <Wrapper className='tag-container'>
      <div className='tag-list'>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link className='link' to={`/${text}`} key={index}>
              {text}({value})
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  text-align: center;

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .link {
    color: white;

    background: var(--primary-300);
    /* margin-right: 10px; */
    padding: 5px;
    border-radius: 5px;
  }
`
export default TagsList
