import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'

import { useSelector } from 'react-redux'

export const VolumeIcon = () => {
  const { volume } = useSelector(({ player }) => player)

  return (
    <>
      {volume * 100 > 70 ? (
        <VolumeUpIcon />
      ) : volume * 100 > 15 ? (
        <VolumeDownIcon />
      ) : volume * 100 > 0 ? (
        <VolumeMuteIcon />
      ) : (
        <VolumeMuteIcon />
      )}
    </>
  )
}
