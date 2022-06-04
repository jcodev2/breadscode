import React from 'react'
import { Link } from 'react-router-dom'
import { handleClick } from '../utilities/functions/goTop'
import upperCaseWords from '../utilities/functions/upperCaseWords'
import { Stars } from './Stars'

const AutocompleteItem = ({ name, image, price, rating }) => {
  const nameCapitalized = upperCaseWords(name)

  return (
    <li className='autocomplete-item'>
      <Link to={`/breads/${name}`} onClick={handleClick}>
        <img src={image} alt={name} />
        <div className='autocomplete-item-info'>
          <h3>{nameCapitalized}</h3>
          <div className='autocomplete-item-bottom'>
            <p>${price}</p>
            <Stars rating={rating} />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default AutocompleteItem
