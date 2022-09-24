// external
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

// own
// context
import { usePlayerContext } from 'context'
// theme
import { StyledPlayerButton } from 'Player/style/styled'

export const ControlPlayPause = () => {
  const { playPause, isPlaying } = usePlayerContext()
  return (
    <StyledPlayerButton onClick={playPause} aria-label='play/pause button'>
      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    </StyledPlayerButton>
  )
}
