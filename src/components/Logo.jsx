import React from 'react'

const Logo = ({ logo }) => {
  return (
    <div className='header-logo'>
      <img src={logo} alt='logo' />
      <span>BreadsCode</span>
    </div>
  )
}

export default Logo
