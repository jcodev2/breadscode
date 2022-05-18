import { ArrowUp } from 'phosphor-react'
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
      <ArrowUp size={32} weight='bold' />
    </div>
  )
}

export default GoTop
