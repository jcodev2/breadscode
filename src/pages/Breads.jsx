import { ArrowDown } from 'phosphor-react'
import React from 'react'
import Confetti from 'react-confetti'
import BreadsCard from '../components/BreadsCard'
import Container from '../components/Container'
import Error from '../components/Error'
import GoTop from '../components/GoTop'
import HeroImage from '../components/HeroImage'
import Search from '../components/Search'
import Spinner from '../components/Spinner'
import Title from '../components/Title'
import useBreads from '../hooks/useBreads'
import HeroImageMenu from '../public/hero-image-menu.jpg'

const Breads = () => {
  const { breads, error, isLoading } = useBreads()

  return (
    <>
      <HeroImage image={HeroImageMenu}>
        <div className='hero-image-titles'>
          <h2 className='left-direction'>Craft</h2>
          <h2 className='right-direction'>a Mouthwatering</h2>
          <h2 className='left-direction'>Menu For Free</h2>
          <ArrowDown weight='bold' />
        </div>
      </HeroImage>

      <Container>
        <section className='section'>
          <Title text='Breads' />

          {isLoading && <Spinner />}

          <Confetti
            width={window.innerWidth - 50}
            height={window.innerHeight}
            numberOfPieces={100}
            recycle={false}
          />

          <div className='breads-search'>
            <Search />
            <p className='length-breads'>We've found {breads.length} breads.</p>
          </div>

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
