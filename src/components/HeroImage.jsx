import React from 'react'
import logo from '../public/logo.png'
import Logo from './Logo'

const HeroImage = () => {
  return (
    <div className='hero-image'>
      <div className='hero-image-content'>
        <Logo logo={logo} />
      </div>
    </div>
  )
}

export default HeroImage
