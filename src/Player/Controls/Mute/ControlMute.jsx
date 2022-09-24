import VolumeOffIcon from '@mui/icons-material/VolumeOff'

import { usePlayerContext } from 'context'
import { VolumeIcon } from '../Volume'

import { StyledButton } from 'theme'

export const ControlMute = () => {
  const { mute } = usePlayerContext()

  return (
    <StyledButton onClick={mute.setMute} aria-label='mute button'>
      {mute.value ? <VolumeOffIcon /> : <VolumeIcon />}
    </StyledButton>
  )
}
