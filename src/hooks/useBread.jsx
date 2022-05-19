import { useEffect, useState } from 'react'
import { getBreads } from '../services'

// http://localhost:3000/#/breads/bolani

const useBread = (breadName) => {
  const [bread, setBread] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchBread = async () => {
    try {
      const [data] = await getBreads()
      const bread = data.find((bread) => bread.name === breadName)
      setBread(bread)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchBread()
  }, [])

  return { bread, loading, error }
}

export default useBread
