import { Cake, Envelope, House, Info } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../public/logo.png'
import { handleClick } from '../utilities/functions/goTop'
import Logo from './Logo'
import Navigation from './Navigation'

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
              <House size={32} weight='bold' />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/breads' onClick={handleClick}>
              <Cake size={32} weight='bold' />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' onClick={handleClick}>
              <Info size={32} weight='bold' />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' onClick={handleClick}>
              <Envelope size={32} weight='bold' />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { HeaderMobile, Header }
