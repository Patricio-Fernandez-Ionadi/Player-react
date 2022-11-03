const initialState_player = {
  audio: null,
  autoplay: true,
  firstSong: false,
  currentIndex: 0,
  currentSong: {
    loaded: false,
  },
  isMuted: false,
  isPlaying: false,
  lastSong: false,
  repeatAll: true,
  repeatOne: false,
  shuffle: false,
  playlist: {
    playlistName: '',
    songs: [],
    length: 0,
  },
  volume: 1,
  isLoading: true,
}

// audio
export const setRefElement = (ref) => (dispatch) =>
  dispatch({
    type: 'SET_HTML_REF',
    payload: ref,
  })
// autoplay
export const turnAutoplay = () => (dispatch) =>
  dispatch({
    type: 'TURN_AUTOPLAY',
  })
// firstSong
export const isFirstSong =
  (bool = true) =>
  (dispatch) =>
    dispatch({ type: 'IS_FIRST_SONG', payload: bool })
// currentIndex
export const setCurrentIndex = (index) => (dispatch) =>
  dispatch({
    type: 'SET_CURRENT_INDEX',
    payload: index,
  })
// currentSong
export const setCurrentSong = (value) => (dispatch) => {
  if (value?.name) {
    dispatch({
      type: 'SET_CURRENT_SONG',
      payload: value,
    })
  } else if (value === true) {
    dispatch({
      type: 'SET_CURRENT_SONG',
      payload: { loaded: true },
    })
  } else if (value === false) {
    dispatch({
      type: 'SET_CURRENT_SONG',
      payload: { loaded: false },
    })
  }
}
// isMuted
export const turnMute = (audio, isMuted) => (dispatch) => {
  dispatch({ type: 'TURN_MUTE' })
  audio.muted = !isMuted
}
// isPlaying
export const turnPlaying = () => (dispatch) =>
  dispatch({
    type: 'TURN_PLAY_PAUSE',
  })
// lastSong
export const isLastSong =
  (bool = true) =>
  (dispatch) =>
    dispatch({ type: 'IS_LAST_SONG', payload: bool })
// repeatAll
export const setRepeat = () => (dispatch) =>
  dispatch({
    type: 'SET_REPEAT_ALL',
  })
// repeatOne
export const setRepeatOne = () => (dispatch) =>
  dispatch({
    type: 'SET_REPEAT_ONE',
  })
// shuffle
export const turnShuffle = () => (dispatch) =>
  dispatch({
    type: 'TURN_SHUFFLE',
  })
// playlist
export const initTrackList =
  (playlist, index = 0) =>
  (dispatch) =>
    dispatch({
      type: 'INIT_TRACK_LIST',
      payload: [playlist, index],
    })
// volume
export const setVolume = (val, audio) => {
  const valueToSet = Number(val) / 100
  return (dispatch) => {
    audio.volume = valueToSet
    dispatch({
      type: 'SET_VOLUME',
      payload: valueToSet,
    })
  }
}
// isLoading
export const turnLoading = (bool) => (dispatch) =>
  dispatch({
    type: 'TURN_LOADING',
    payload: bool,
  })

export const setSongDuration = (minsSecs, numSecs) => (dispatch) => {
  dispatch({
    type: 'SET_SONG_DURATION',
    payload: {
      duration: minsSecs,
      duration_sec: numSecs,
    },
  })
}
export const setPercentPlayed = (audio, currentSong) => (dispatch) => {
  dispatch({
    type: 'SET_PERCENT_PLAYED',
    payload: Math.floor((audio.currentTime * 100) / currentSong.duration_sec),
  })
}
export const setPercentPlayedExplicit = (val) => (dispatch) => {
  dispatch({
    type: 'SET_PERCENT_PLAYED',
    payload: val,
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
    // -------------------------------------------------------
    // audio
    case 'SET_HTML_REF': {
      return {
        ...state,
        audio: action.payload,
      }
    }
    // -------------------------------------------------------
    // autoplay
    case 'TURN_AUTOPLAY': {
      return { ...state, autoplay: !state.autoplay }
    }
    // -------------------------------------------------------
    // firstSong
    case 'IS_FIRST_SONG': {
      return { ...state, firstSong: action.payload }
    }
    // -------------------------------------------------------
    // currentIndex
    case 'SET_CURRENT_INDEX': {
      return { ...state, currentIndex: action.payload }
    }
    // -------------------------------------------------------
    // currentSong
    case 'SET_CURRENT_SONG': {
      return {
        ...state,
        currentSong: { ...state.currentSong, ...action.payload },
      }
    }
    // -------------------------------------------------------
    // isMuted
    case 'TURN_MUTE': {
      return { ...state, isMuted: !state.isMuted }
    }
    // -------------------------------------------------------
    // isPlaying
    case 'TURN_PLAY_PAUSE': {
      return { ...state, isPlaying: !state.isPlaying }
    }
    // -------------------------------------------------------
    // lastSong
    case 'IS_LAST_SONG': {
      return { ...state, lastSong: action.payload }
    }
    // -------------------------------------------------------
    // repeatAll
    case 'SET_REPEAT_ALL': {
      return {
        ...state,
        repeatAll: !state.repeatAll,
      }
    }
    // -------------------------------------------------------
    // repeatOne
    case 'TURN_REPEAT_ONE': {
      return { ...state, repeatOne: !state.repeatOne }
    }
    // -------------------------------------------------------
    // shuffle
    case 'TURN_SHUFFLE': {
      return { ...state, shuffle: !state.shuffle }
    }
    // -------------------------------------------------------
    // playlist
    case 'INIT_TRACK_LIST': {
      return {
        ...state,
        playlist: {
          name: action.payload[0].name,
          songs: action.payload[0].songs,
          length: action.payload[0].songs.length,
          index: action.payload[1],
        },
      }
    }
    // -------------------------------------------------------
    // volume
    case 'SET_VOLUME': {
      return {
        ...state,
        volume: action.payload,
      }
    }
    // -------------------------------------------------------
    // isLoading
    case 'TURN_LOADING': {
      return {
        ...state,
        isLoading: action.payload ? action.payload : !state.isLoading,
      }
    }
    // -------------------------------------------------------
    // -------------------------------------------------------
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
    // -------------------------------------------------------
    case 'SET_PERCENT_PLAYED': {
      return {
        ...state,
        currentSong: {
          ...state.currentSong,
          percent_played: action.payload,
        },
      }
    }

    // -------------------------------------------------------
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
