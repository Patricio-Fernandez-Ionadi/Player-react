import pr from './playerInitialState'

export const playerReducer = (state = pr, action) => {
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
    // ended
    case 'SET_ENDED': {
      return {
        ...state,
        ended: action.payload ? action.payload : !state.ended,
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
      return {
        ...state,
        isPlaying:
          action.payload !== undefined ? action.payload : !state.isPlaying,
      }
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
        currentIndex: action.payload[1] ? action.payload[1] : 0,
        playlist: {
          name: action.payload[0].name,
          songs: action.payload[0].songs,
          length: action.payload[0].songs.length,
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
        isLoading:
          action.payload !== undefined ? action.payload : !state.isLoading,
      }
    }
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
