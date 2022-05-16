import React from 'react'
import BakeryCard from '../components/BakeryCard'
import Container from '../components/Container'
import Error from '../components/Error'
import GoTop from '../components/GoTop'
import HeroImage from '../components/HeroImage'
import Spinner from '../components/Spinner'
import Title from '../components/Title'
import useBakeries from '../hooks/useBakeries'

const Home = () => {
  const { bakery, isLoading, error } = useBakeries()

  return (
    <>
      <HeroImage />
      <Container>
        <section className='section'>
          <Title text='Do you want to know our Bakeries?' />

          {isLoading && <Spinner />}

          <div className='bakery-cards'>
            {error ? (
              <Error message={error} />
            ) : (
              bakery.map(({ id, address, name, image }) => (
                <BakeryCard
                  key={id}
                  address={address}
                  name={name}
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

export default Home
