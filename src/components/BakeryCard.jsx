import React, { memo } from 'react'

const BakeryCard = ({ address, name, image }) => {
  return (
    <article className='bakery-card'>
      <img src={image} alt={name} />
      <footer className='bakery-card-info'>
        <h3>{name}</h3>
        <p>{address}</p>
      </footer>
    </article>
  )
}

export default memo(BakeryCard)
