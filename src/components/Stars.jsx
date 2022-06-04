import { Star } from 'phosphor-react'
import React from 'react'

const Stars = ({ rating }) => {
  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(<Star key={i} weight={'bold'} />)
  }

  return <div className='stars'>{stars}</div>
}

export { Stars }
