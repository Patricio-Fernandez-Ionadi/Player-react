import { getAllSongs } from 'api/allSongs'

const initialState_player = {
  songs: [],
  isPlaying: false,
  isMuted: false,
  currentSong: {
    listPosition: 0,
    index: 1,
    src: '',
    name: '',
    duration: '',
    duration_sec: 0,
    percent_played: 0,
    time_left: 0,
  },
  volume: 1,
  autoplay: false,
  repeatAll: false,
  repeatOne: false,
  html_audio: null,
}

export const initSongs = () => async (dispatch) => {
  const songs = await getAllSongs()
  dispatch({
    type: 'SONGS_INIT',
    payload: songs,
  })
}
export const setRefElement = (ref) => (dispatch) => {
  dispatch({
    type: 'SET_HTML_REF',
    payload: ref,
  })
}
export const setSongDuration = (stringTime, numSecs) => (dispatch) => {
  dispatch({
    type: 'SET_SONG_DURATION',
    payload: {
      duration: stringTime,
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
    case 'SONGS_INIT': {
      return {
        ...state,
        songs: action.payload,
        currentSong: {
          listPosition: 0,
          index: 1,
          src: action.payload[0].src,
          name: action.payload[0].name,
        },
      }
    }
    // case 'SET_CURRENT_SONG': {
    //   return { ...state, currentSong: action.payload }
    // }
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
          percent_played: 0,
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
