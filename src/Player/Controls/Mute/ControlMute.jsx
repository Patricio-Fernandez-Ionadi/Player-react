// external
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import styled from 'styled-components'

// context
import { useDispatch, useSelector } from 'react-redux'
import { turnMute } from 'store'
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
  const dispatch = useDispatch()
  const { html_audio, isMuted } = useSelector(({ player }) => player)

  const handleMuteButton = () => {
    dispatch(turnMute(html_audio, isMuted))
  }

  return (
    <StyledMuteButton onClick={handleMuteButton} aria-label='mute button'>
      <VolumeOffIcon />
    </StyledMuteButton>
  )
}
