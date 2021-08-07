import { useState, useEffect } from 'react'
import axios from 'axios'

const useQuery = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleQuery = async (e) => {
    setLoading(true)
    try {
      const response = await axios.get(url)
      setData(res.data)
      setLoading(false)
    } catch (error) {
      setError(err.response?.data.err)
      setLoading(false)
    }
  }
  useEffect(() => handleQuery(), [handleQuery])
  return { data, loading, error, refetch: handleQuery }
}