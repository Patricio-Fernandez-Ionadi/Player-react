// context
import { useSelector } from 'react-redux'
// theme
import { MuteIcon } from './MuteIcon'

// components
import { ControlVolume, VolumeIcon } from '.'
import { ControlMute } from '../Mute'

export const Volume = () => {
  // const { isMuted } = useSelector(({ player }) => player)

  return (
    <div className='volume-control-container'>
      <ControlMute />
      <button
        aria-label='volume control button'
        type='button'
        className='btn volume-button'
      >
        {/* {false ? <MuteIcon /> : <VolumeIcon />} */}
      </button>
      <ControlVolume />
    </div>
  )
}
