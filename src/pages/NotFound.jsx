import React from 'react'
import Container from '../components/Container'
import GoTop from '../components/GoTop'
import Title from '../components/Title'
import NotFoundIMG from '../public/NotFound.jpg'

const NotFound = () => {
  return (
    <>
      <Container>
        <section className='section'>
          <Title text='Not Found' />
          <img className='not-found' src={NotFoundIMG} alt='Not Found' />
        </section>
      </Container>
      <GoTop />
    </>
  )
}

export default NotFound
