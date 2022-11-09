const initialState_player = {
  audio: null,
  autoplay: true,
  currentIndex: 0,
  currentSong: {
    loaded: false,
  },
  ended: false,
  firstSong: false,
  isLoading: true,
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
}

export default initialState_player
