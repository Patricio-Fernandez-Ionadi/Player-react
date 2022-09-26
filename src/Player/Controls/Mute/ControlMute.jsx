// external
import VolumeOffIcon from '@mui/icons-material/VolumeOff'

// context
import { useDispatch, useSelector } from 'react-redux'
import { turnMute } from 'store'

export const ControlMute = () => {
  const dispatch = useDispatch()
  const { html_audio, isMuted } = useSelector(({ player }) => player)

  const handleMuteButton = () => {
    dispatch(turnMute(html_audio, isMuted))
  }

  return (
    <button
      className={`${isMuted ? 'btn btn-mute btn-muted' : `btn btn-mute`}`}
      onClick={handleMuteButton}
      aria-label='mute button'
    >
      <VolumeOffIcon />
    </button>
  )
}
