import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../public/logo.png'
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
            <NavLink to='/'>
              <HomeSVG />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/breads'>
              <BreadSVG />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about'>
              <AboutSVG />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact'>
              <ContactSVG />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { HeaderMobile, Header }
