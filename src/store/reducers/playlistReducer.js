export const playlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    case 'REMOVE_SONG': {
      const newState = state.filter((e) => e.src !== action.payload.src)
      return newState
    }

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
