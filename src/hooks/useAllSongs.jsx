import { getAllSongs } from 'api/allSongs'
import { useEffect, useState } from 'react'

export const useAllSongs = () => {
  const [songs, setPlaylist] = useState()
  useEffect(() => {
    getAllSongs().then((res) => setPlaylist(res))
  }, [])

  return { songs }
}
