import VolumeOffIcon from '@mui/icons-material/VolumeOff'

import { usePlayerContext } from 'context'
import { VolumeIcon } from '../Volume'

export const ControlMute = () => {
  const { mute } = usePlayerContext()

  return (
    <button onClick={mute.setMute}>
      {mute.value ? <VolumeOffIcon /> : <VolumeIcon />}
    </button>
  )
}
