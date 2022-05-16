import React, { useState } from 'react'

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setIsVisible(scrollTop > 100)
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useState(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div
      className={`go-top ${isVisible ? 'is-visible' : ''}`}
      onClick={handleClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' />
      </svg>
    </div>
  )
}

export default GoTop
