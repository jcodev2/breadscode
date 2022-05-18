import { Cake, Envelope, House, Info } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { handleClick } from '../utilities/functions/goTop'

const Navigation = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <NavLink to='/' onClick={handleClick}>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/breads' onClick={handleClick}>
            Breads
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' onClick={handleClick}>
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contact' onClick={handleClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const NavigationMobile = () => {
  return (
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
  )
}

export { Navigation, NavigationMobile }
