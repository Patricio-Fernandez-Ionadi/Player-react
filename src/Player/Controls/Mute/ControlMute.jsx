// external
import VolumeOffIcon from '@mui/icons-material/VolumeOff'

// own
// context
import { usePlayerContext } from 'context'
// components
import { VolumeIcon } from '../Volume'
// theme
import { StyledPlayerButton } from 'theme'

export const ControlMute = () => {
  const { mute } = usePlayerContext()

  return (
    <StyledPlayerButton onClick={mute.setMute} aria-label='mute button'>
      {mute.value ? <VolumeOffIcon /> : <VolumeIcon />}
    </StyledPlayerButton>
  )
}
