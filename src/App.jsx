import React from 'react'
import Footer from './components/Footer'
import { Header, HeaderMobile } from './components/Header'
import Router from './components/Router'

function App() {
  const mediaQuery = window.matchMedia('(min-width: 62em)')

  if (mediaQuery.matches) {
    return (
      <>
        <Header />
        <Router />
        <Footer />
      </>
    )
  }

  return (
    <>
      <HeaderMobile />
      <Router />
      <Footer />
    </>
  )
}

export default App
