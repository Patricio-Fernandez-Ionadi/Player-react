const initialState_player = {
  isPlaying: false,
  isMuted: false,
  volume: 1,
  shuffle: false,
  currentSong: {},
  autoplay: true,
  repeatAll: true,
  repeatOne: false,
  html_audio: null,
}

export const initPlayerState = () => (dispatch) => {
  dispatch({
    type: 'INIT_PLAYER_STATE',
  })
}
export const initTrackList = (list) => (dispatch) => {
  dispatch({
    type: 'INIT_TRACK_LIST',
    payload: list,
  })
}
export const setRefElement = (ref) => (dispatch) => {
  dispatch({
    type: 'SET_HTML_REF',
    payload: ref,
  })
}

export const setCurrentSong = (song) => (dispatch) => {
  dispatch({
    type: 'SET_CURRENT_SONG',
    payload: song,
  })
}

export const setSongDuration = (minsSecs, numSecs) => (dispatch) => {
  dispatch({
    type: 'SET_SONG_DURATION',
    payload: {
      duration: minsSecs,
      duration_sec: numSecs,
    },
  })
}

export const setPercentPlayed = (html_audio, currentSong) => (dispatch) => {
  dispatch({
    type: 'SET_PERCENT_PLAYED',
    payload: Math.floor(
      (html_audio.currentTime * 100) / currentSong.duration_sec
    ),
  })
}
export const setPercentPlayedExplicit = (val) => (dispatch) => {
  dispatch({
    type: 'SET_PERCENT_PLAYED',
    payload: val,
  })
}
//
export const turnMute = (html_audio, isMuted) => (dispatch) => {
  dispatch({ type: 'TURN_MUTE' })
  html_audio.muted = !isMuted
}
export const setVolume = (val, html_audio) => {
  const valueToSet = Number(val) / 100
  return (dispatch) => {
    html_audio.volume = valueToSet
    dispatch({
      type: 'SET_VOLUME',
      payload: valueToSet,
    })
  }
}
export const setRepeat = () => (dispatch) =>
  dispatch({
    type: 'SET_REPEAT_ALL',
  })
//
export const nextSong = () => (dispatch) => {
  dispatch({
    type: 'SET_NEXT_SONG',
  })
}
export const startAgain = () => (dispatch) => {
  dispatch({
    type: 'RESTART_LIST',
  })
}
//
export const playerReducer = (state = initialState_player, action) => {
  switch (action.type) {
    case 'INIT_PLAYER_STATE':
      return state
    case 'INIT_TRACK_LIST': {
      return {
        ...state,
        songs: action.payload,
      }
    }
    case 'SET_CURRENT_SONG': {
      return {
        ...state,
        currentSong: { ...action.payload },
      }
    }
    case 'TURN_PLAY_PAUSE': {
      return { ...state, isPlaying: !state.isPlaying }
    }
    case 'TURN_MUTE': {
      return { ...state, isMuted: !state.isMuted }
    }
    case 'SET_SONG_DURATION': {
      return {
        ...state,
        currentSong: {
          ...state.currentSong,
          duration: action.payload.duration,
          duration_sec: action.payload.duration_sec,
        },
      }
    }
    case 'SET_PERCENT_PLAYED': {
      return {
        ...state,
        currentSong: {
          ...state.currentSong,
          percent_played: action.payload,
        },
      }
    }
    case 'SET_REPEAT_ALL': {
      return {
        ...state,
        repeatAll: !state.repeatAll,
      }
    }
    case 'SET_VOLUME': {
      return {
        ...state,
        volume: action.payload,
      }
    }
    case 'SET_HTML_REF': {
      return {
        ...state,
        html_audio: action.payload,
      }
    }
    case 'SET_NEXT_SONG': {
      return {
        ...state,
        currentSong: {
          listPosition: state.currentSong.listPosition + 1,
          index: state.currentSong.index + 1,
          src: state.songs[Number(state.currentSong.listPosition) + 1].src,
          name: state.songs[Number(state.currentSong.listPosition) + 1].name,
          // percent_played: 0,
        },
      }
    }
    case 'RESTART_LIST': {
      return {
        ...state,
        currentSong: {
          listPosition: 0,
          index: 1,
          src: state.songs[0].src,
          name: state.songs[0].name,
          percent_played: 0,
        },
      }
    }
    default:
      return state
  }
}
