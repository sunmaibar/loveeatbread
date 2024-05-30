import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CakeList = ({ breads = [] }) => {
  return (
    <div className='recipes-list'>
      {breads.map((bread) => {
        const { id, images, price, product, slug } = bread
        const pathToImage = getImage(images[0].gatsbyImageData)
        return (
          <Link key={id} to={`/breads/${slug}`} className='recipe'>
            <GatsbyImage
              alt={product}
              image={pathToImage}
              className='recipe-img'
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5>{product}</h5>
              <p>售價：${price}元</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default CakeList
