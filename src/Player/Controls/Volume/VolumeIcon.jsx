import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'

import { usePlayerContext } from 'context'

export const VolumeIcon = () => {
  const { volume } = usePlayerContext()

  let vol = Math.round(volume.value * 100)

  return (
    <div>
      {vol > 70 ? (
        <VolumeUpIcon />
      ) : vol > 40 ? (
        <VolumeDownIcon />
      ) : vol > 0 ? (
        <VolumeMuteIcon />
      ) : (
        <VolumeMuteIcon />
      )}
    </div>
  )
}
