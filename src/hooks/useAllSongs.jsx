import { getAllSongs } from 'api/allSongs'
import { useEffect, useState } from 'react'

export const useAllSongs = () => {
  const [state, setstate] = useState()
  useEffect(() => {
    getAllSongs().then((res) => setstate(res))
  }, [])

  return state
}
