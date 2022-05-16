import { useEffect, useState } from 'react'
import { getBakeries } from '../services'

const useBakeries = () => {
  const [bakery, setBakery] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchBakeries = async () => {
    try {
      const [bakeries] = await getBakeries()
      setBakery(bakeries)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBakeries()
  }, [])

  return { bakery, isLoading, error }
}

export default useBakeries
