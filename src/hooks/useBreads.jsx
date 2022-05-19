import { useEffect, useState } from 'react'
import { getBreads } from '../services'

const useBreads = () => {
  const [breads, setBreads] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchBreads = async () => {
    try {
      const [breads] = await getBreads()
      setBreads(breads)
      setIsLoading(false)

      console.log('breads', breads)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBreads()
  }, [])

  return { breads, isLoading, error }
}

export default useBreads
