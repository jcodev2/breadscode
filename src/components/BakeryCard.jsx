import React from 'react'

const BakeryCard = ({ address, name, image }) => {
  return (
    <article className='bakery-card'>
      <img src={image} alt={name} />
      <div className='bakery-card-info'>
        <h3>{name}</h3>
        <p>{address}</p>
      </div>
    </article>
  )
}

export default BakeryCard
