export const addSongToPlaylist = (song) => (dispatch) => {
  dispatch({
    type: 'ADD_SONG',
    payload: song,
  })
}

export const removeSongFromPlaylist = (song) => (dispatch) => {
  dispatch({
    type: 'REMOVE_SONG',
    payload: song,
  })
}

export const savePlaylist = (newPlaylist, playlists) => (dispatch) => {
  localStorage.setItem('playlists', JSON.stringify([...playlists, newPlaylist]))

  dispatch({
    type: 'SAVE_NEW_PLAYLIST',
    payload: newPlaylist,
  })
}

export const setPlaylistName = (name) => (dispatch) => {
  dispatch({
    type: 'SET_PLAYLIST_NAME',
    payload: name,
  })
}

export const getLsPlaylists = () => (dispatch) => {
  const playlistsFromLocalStorage =
    JSON.parse(localStorage.getItem('playlists')) || []

  dispatch({
    type: 'GET_PLAYLISTS_FROM_LOCALSTORAGE',
    payload: playlistsFromLocalStorage,
  })
}

export const removeAllSongsFromNewPlaylist = () => (dispatch) =>
  dispatch({ type: 'REMOVE_ALL_SONGS_FROM_NEW_PLAYLIST' })
