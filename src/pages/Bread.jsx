import React from 'react'
import { useParams } from 'react-router-dom'
import useBread from '../hooks/useBread'

const Bread = () => {
  const { breadName } = useParams()

  const { bread, loading, error } = useBread(breadName)

  return (
    <div>
      <h1>Bread {breadName}</h1>
    </div>
  )
}

export default Bread
