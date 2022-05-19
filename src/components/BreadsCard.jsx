import React from 'react'
import { Link } from 'react-router-dom'
import cutText from '../utilities/functions/cutText'
import upperCaseWords from '../utilities/functions/upperCaseWords'

const BreadsCard = ({ name, description, price, image }) => {
  const breadName = upperCaseWords(name)
  const shortDescription = cutText(description, 30)

  return (
    <article className='breads-card'>
      <figure className='breads-card-figure'>
        <img src={image} alt={breadName} />
      </figure>
      <div className='breads-card-content'>
        <h3 className='breads-card-title'>{breadName}</h3>
        <p className='breads-card-description'>{shortDescription}</p>
        <p className='breads-card-price'>${price}</p>
      </div>
      <div className='breads-card-button'>
        <Link to={`/breads/${name}`}>
          View <span className='breads-card-button-text'>{breadName}</span>
        </Link>
      </div>
    </article>
  )
}

export default BreadsCard
