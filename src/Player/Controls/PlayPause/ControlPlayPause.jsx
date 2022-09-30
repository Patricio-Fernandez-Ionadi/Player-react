// external
import { useDispatch, useSelector } from 'react-redux'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

// utils
import { pauseTrack, playTrack } from 'utils/helpers'

export const ControlPlayPause = () => {
  const dispatch = useDispatch()
  const { isPlaying, html_audio } = useSelector(({ player }) => player)

  const playPause = () => {
    dispatch({ type: 'TURN_PLAY_PAUSE' })
    isPlaying ? pauseTrack(html_audio) : playTrack(html_audio)
  }

  return (
    <button className='btn' onClick={playPause} aria-label='play/pause button'>
      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    </button>
  )
}
