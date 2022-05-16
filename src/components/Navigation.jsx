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

export default Navigation
