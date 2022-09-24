import { usePlayerContext } from 'context'
import { StyledButton } from 'theme'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

export const ControlPlayPause = () => {
  const { playPause, isPlaying } = usePlayerContext()
  return (
    <StyledButton onClick={playPause} aria-label='play/pause button'>
      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    </StyledButton>
  )
}
