import React from 'react'

const HeroImage = ({ image, children }) => {
  return (
    <div className='hero-image' style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  )
}

export default HeroImage
