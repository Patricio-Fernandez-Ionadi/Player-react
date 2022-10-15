// external
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

// utils
import { pauseTrack, playTrack } from 'utils/helpers'
import { usePlayerContext } from 'Player/Context'

export const ControlPlayPause = () => {
  const { player, turnPlay } = usePlayerContext()
  const { isPlaying, html_audio } = player

  const playPause = () => {
    turnPlay()
    isPlaying ? pauseTrack(html_audio) : playTrack(html_audio)
  }

  return (
    <button className='btn' onClick={playPause} aria-label='play/pause button'>
      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    </button>
  )
}