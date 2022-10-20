import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLsPlaylists } from 'store'

export const useLocalStoragePlaylists = () => {
  const dispatch = useDispatch()
  const { playlists } = useSelector(({ playlist }) => playlist)

  useEffect(() => {
    if (!playlists[0]) {
      dispatch(getLsPlaylists())
    }
  }, [])
  return playlists
}
