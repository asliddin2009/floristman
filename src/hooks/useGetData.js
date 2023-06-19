import axios from 'axios'
import { useEffect, useState } from 'react'

const path = "https://611758a730022f0017a05dda.mockapi.io/memory-game/"

const useGetData = (url, initialState = null) => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const { data } = await axios.get(`${path}${url}`)

      setData(data)
      setLoading(false)
    }

    getData()
  }, [url])

  return [data, loading]
}

export default useGetData
