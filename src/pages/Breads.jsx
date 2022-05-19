import React from 'react'
import BreadsCard from '../components/BreadsCard'
import Container from '../components/Container'
import Error from '../components/Error'
import GoTop from '../components/GoTop'
import HeroImage from '../components/HeroImage'
import Spinner from '../components/Spinner'
import Title from '../components/Title'
import useBreads from '../hooks/useBreads'
import HeroImageMenu from '../public/hero-image-menu.jpg'

const Breads = () => {
  const { breads, error, isLoading } = useBreads()

  return (
    <>
      <HeroImage image={HeroImageMenu}></HeroImage>
      <Container>
        <section className='section'>
          <Title text='Breads' />

          {isLoading && <Spinner />}

          <p className='length-breads'>We've found {breads.length} breads.</p>

          <div className='breads'>
            {error ? (
              <Error message={error} />
            ) : (
              breads.map(({ id, name, description, price, image }) => (
                <BreadsCard
                  key={id}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                />
              ))
            )}
          </div>
        </section>
      </Container>
      <GoTop />
    </>
  )
}

export default Breads
