import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../public/logo.png'
import { handleClick } from '../utilities/functions/goTop'
import Logo from './Logo'
import Navigation from './Navigation'
import { AboutSVG, BreadSVG, ContactSVG, HomeSVG } from './SVG'

const Header = () => {
  return (
    <header className='header-desktop'>
      <Logo logo={logo} />
      <Navigation />
    </header>
  )
}

const HeaderMobile = () => {
  return (
    <header className='header-mobile'>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='/' onClick={handleClick}>
              <HomeSVG />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/breads' onClick={handleClick}>
              <BreadSVG />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' onClick={handleClick}>
              <AboutSVG />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' onClick={handleClick}>
              <ContactSVG />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { HeaderMobile, Header }
