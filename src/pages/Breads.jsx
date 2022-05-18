import React from 'react'
import Container from '../components/Container'
import GoTop from '../components/GoTop'
import HeroImage from '../components/HeroImage'
import Title from '../components/Title'
import HeroImageMenu from '../public/hero-image-menu.jpg'

const Breads = () => {
  return (
    <>
      <HeroImage image={HeroImageMenu}></HeroImage>
      <Container>
        <section className='section'>
          <Title text='Breads' />
        </section>
      </Container>
      <GoTop />
    </>
  )
}

export default Breads
