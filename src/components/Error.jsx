import React from 'react'

const Error = ({ message }) => {
  return (
    <div className='error'>
      <h3 className='error-message'>{message}</h3>
    </div>
  )
}

export default Error
