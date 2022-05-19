import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Bread from '../pages/Bread'
import Breads from '../pages/Breads'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/breads' element={<Breads />} />
      <Route path='/breads/:breadName' element={<Bread />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router
