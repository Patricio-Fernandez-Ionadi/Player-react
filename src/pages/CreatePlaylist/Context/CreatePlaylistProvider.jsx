import { useDispatch, useSelector } from 'react-redux'

import { CreatePlaylistContext } from './context'

import { useAllSongs } from '../hooks'

import {
  addSongToPlaylist,
  removeSongFromPlaylist,
  setPlaylistName,
  savePlaylist,
} from 'store'
import { removeAllSongsFromNewPlaylist } from 'store'

export const CreatePlaylistProvider = ({ children }) => {
  const dispatch = useDispatch()

  const { songs } = useAllSongs() // all songs in server
  const { newPlaylist, playlists } = useSelector(({ playlist }) => playlist)

  // see if a specific song is already in the playlist (Boolean)
  const checkSong = (song) =>
    newPlaylist ? newPlaylist.songs?.includes(song) : false

  // adds or remove a song from the playlist
  const toggleSong = (song) =>
    checkSong(song)
      ? dispatch(removeSongFromPlaylist(song))
      : dispatch(addSongToPlaylist(song))

  // playlist name
  const setName = (name) => dispatch(setPlaylistName(name))

  const isFullList = newPlaylist.songs?.length === songs?.length
  const isEmptyList = newPlaylist.songs.length === 0
  const isEmptyName = newPlaylist.name === ''
  const isExistentPlaylist = playlists.includes(newPlaylist)
  // checks if the playlist info is correct to be saved
  const createPlaylistRequest = () => {
    if (isEmptyList || isEmptyName || isExistentPlaylist) {
      console.log('tenes que agregar items o ponerle un nombre')
    } else {
      dispatch(savePlaylist(newPlaylist, playlists))
    }
  }

  // creating a new playlist you can add all songs or remove it
  const toggleAllSongs = () => {
    if (isFullList) {
      dispatch(removeAllSongsFromNewPlaylist())
    } else {
      for (let song of songs) {
        if (!checkSong(song)) {
          dispatch(addSongToPlaylist(song))
        }
      }
    }

    // dispatch(toggleAllSongs(songs))
  }

  // Context
  const createPlaylistContext = {
    songs,
    isEmptyList,
    isFullList,
    isEmptyName,
    setName,
    checkSong,
    toggleSong,
    createPlaylistRequest,
    toggleAllSongs,
  }

  return (
    <CreatePlaylistContext.Provider value={createPlaylistContext}>
      {children}
    </CreatePlaylistContext.Provider>
  )
}
