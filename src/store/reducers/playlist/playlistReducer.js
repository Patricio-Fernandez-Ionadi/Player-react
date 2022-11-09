import plr from './playlistInitialState'

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
        newPlaylist: {
          name: '',
          songs: [],
        },
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
    case 'GET_PLAYLISTS_FROM_LOCALSTORAGE':
      return {
        ...state,
        playlists: action.payload,
      }
    // --------------------------------------------------------------
    case 'REMOVE_ALL_SONGS_FROM_NEW_PLAYLIST':
      return {
        ...state,
        newPlaylist: {
          ...state.newPlaylist,
          songs: [],
        },
      }
    // --------------------------------------------------------------
    default:
      return state
  }
}
