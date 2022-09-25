// external
import { useDispatch, useSelector } from 'react-redux'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

// theme
import { StyledPlayerButton } from 'Player/style/styled'
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
    <StyledPlayerButton onClick={playPause} aria-label='play/pause button'>
      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    </StyledPlayerButton>
  )
}
