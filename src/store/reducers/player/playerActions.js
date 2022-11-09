// -------- audio --------
export const setRefElement = (ref) => (dispatch) =>
  dispatch({
    type: 'SET_HTML_REF',
    payload: ref,
  })

// -------- autoplay --------
export const turnAutoplay = () => (dispatch) =>
  dispatch({
    type: 'TURN_AUTOPLAY',
  })

// -------- currentIndex --------
export const setCurrentIndex = (index) => (dispatch) =>
  dispatch({
    type: 'SET_CURRENT_INDEX',
    payload: index,
  })

// -------- currentSong --------
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

// -------- ended --------
export const endedSong = (bool) => (dispatch) =>
  dispatch({
    type: 'SET_ENDED',
    payload: bool,
  })

// -------- firstSong --------
export const isFirstSong =
  (bool = true) =>
  (dispatch) =>
    dispatch({ type: 'IS_FIRST_SONG', payload: bool })

// -------- isLoading --------
export const turnLoading = (bool) => (dispatch) =>
  dispatch({
    type: 'TURN_LOADING',
    payload: bool,
  })

// -------- isMuted --------
export const turnMute = (audio, isMuted) => (dispatch) => {
  dispatch({ type: 'TURN_MUTE' })
  audio.muted = !isMuted
}

// -------- isPlaying --------
export const turnPlaying = (bool) => (dispatch) =>
  dispatch({
    type: 'TURN_PLAY_PAUSE',
    payload: bool,
  })

// -------- lastSong --------
export const isLastSong =
  (bool = true) =>
  (dispatch) =>
    dispatch({ type: 'IS_LAST_SONG', payload: bool })

// -------- repeatAll --------
export const setRepeat = () => (dispatch) =>
  dispatch({
    type: 'SET_REPEAT_ALL',
  })

// -------- repeatOne --------
export const setRepeatOne = () => (dispatch) =>
  dispatch({
    type: 'SET_REPEAT_ONE',
  })

// -------- shuffle --------
export const turnShuffle = () => (dispatch) =>
  dispatch({
    type: 'TURN_SHUFFLE',
  })

// -------- playlist --------
export const initTrackList = (playlist, index) => (dispatch) =>
  dispatch({
    type: 'INIT_TRACK_LIST',
    payload: [playlist, index],
  })

// -------- volume --------
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
// -------- reset --------
export const startAgain = () => (dispatch) => {
  dispatch({
    type: 'RESTART_LIST',
  })
}

const setSongDuration = (minsSecs, numSecs) => (dispatch) => {
  dispatch({
    type: 'SET_SONG_DURATION',
    payload: {
      duration: minsSecs,
      duration_sec: numSecs,
    },
  })
}
const setPercentPlayed = (audio, currentSong) => (dispatch) => {
  dispatch({
    type: 'SET_PERCENT_PLAYED',
    payload: Math.floor((audio.currentTime * 100) / currentSong.duration_sec),
  })
}
const setPercentPlayedExplicit = (val) => (dispatch) => {
  dispatch({
    type: 'SET_PERCENT_PLAYED',
    payload: val,
  })
}
