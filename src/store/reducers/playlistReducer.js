const plr = {
  playlists: [],
  newPlaylist: {
    name: '',
    songs: [],
  },
  currentPlaylist: [],
}

export const playlistReducer = (state = plr, action) => {
  switch (action.type) {
    // --------------------------------------------------------------
    case 'ADD_SONG':
      return {
        ...state,
        newPlaylist: {
          ...state.newPlaylist,
          songs: [...state.newPlaylist.songs, action.payload],
        },
      }
    // --------------------------------------------------------------
    case 'REMOVE_SONG': {
      const newState = state.newPlaylist.songs.filter(
        (e) => e.src !== action.payload.src
      )
      return {
        ...state,
        newPlaylist: {
          ...state.newPlaylist,
          songs: newState,
        },
      }
    }
    // --------------------------------------------------------------
    case 'SAVE_NEW_PLAYLIST': {
      return {
        ...state,
        newPlaylist: [],
        playlists: [...state.playlists, action.payload],
      }
    }
    // --------------------------------------------------------------
    case 'SET_PLAYLIST_NAME':
      return {
        ...state,
        newPlaylist: {
          ...state.newPlaylist,
          name: action.payload,
        },
      }
    // --------------------------------------------------------------
    default:
      return state
  }
}

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

export const savePlaylist = (newPlaylist) => (dispatch) => {
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
