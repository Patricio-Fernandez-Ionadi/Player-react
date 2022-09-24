// external
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import styled from 'styled-components'

// own
// context
import { usePlayerContext } from 'context'
// theme
import { StyledPlayerButton } from 'Player/style/styled'

const StyledMuteButton = styled(StyledPlayerButton)`
  && {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #aaadb0;
  }
`

export const ControlMute = () => {
  const { mute } = usePlayerContext()

  return (
    <StyledMuteButton onClick={mute.setMute} aria-label='mute button'>
      <VolumeOffIcon />
    </StyledMuteButton>
  )
}
