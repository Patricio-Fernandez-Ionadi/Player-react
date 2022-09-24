// external
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

// own
import { usePlayerContext } from 'context'
import { StyledPlayerButton } from 'theme'

export const ControlPlayPause = () => {
  const { playPause, isPlaying } = usePlayerContext()
  return (
    <StyledPlayerButton onClick={playPause} aria-label='play/pause button'>
      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    </StyledPlayerButton>
  )
}
