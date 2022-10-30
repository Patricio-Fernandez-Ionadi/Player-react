// external
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

// utils
import { pauseTrack, playTrack } from 'utils/helpers'
import { usePlayerContext } from 'app/Aside/Player/Context'

export const ControlPlayPause = () => {
  const { player, turnPlay } = usePlayerContext()
  const { isPlaying, audio } = player

  const playPause = () => {
    turnPlay()
    isPlaying ? pauseTrack(audio) : playTrack(audio)
  }

  return (
    <button
      className='btn-player play-button'
      onClick={playPause}
      aria-label='play/pause button'
    >
      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    </button>
  )
}
