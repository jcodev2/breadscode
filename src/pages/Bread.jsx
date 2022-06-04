import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import useBread from '../hooks/useBread'

const Bread = () => {
  const { breadName } = useParams()

  const { bread, loading, error } = useBread(breadName)

  return (
    <Container>
      <h1>Bread {breadName}</h1>
    </Container>
  )
}

export default Bread
