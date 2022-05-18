import React, { createRef, useState } from 'react'
import logo from '../public/logo.png'
import Logo from './Logo'
import { Navigation, NavigationMobile } from './Navigation'

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true)
  const HeaderRef = createRef()

  const handleScroll = () => {
    if (HeaderRef.current) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const HeroImageHeight =
        HeaderRef.current.parentElement.children[1].clientHeight

      if (scrollTop > HeroImageHeight - 60) {
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <header
      className={`header-desktop ${
        isTransparent ? 'is-transparent' : 'is-opaque'
      }`}
      ref={HeaderRef}
    >
      <Logo logo={logo} />
      <Navigation />
    </header>
  )
}

const HeaderMobile = () => {
  return (
    <header className='header-mobile'>
      <NavigationMobile />
    </header>
  )
}

export { HeaderMobile, Header }
