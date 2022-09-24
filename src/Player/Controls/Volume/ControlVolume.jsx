import { useEffect, useRef } from 'react'
import { usePlayerContext } from 'context'

import './style/index.css'

export const ControlVolume = () => {
  // Input element
  const volumeControl = useRef(HTMLInputElement)
  // context
  const { volume } = usePlayerContext()

  // sets the default value for the volume to 100% at the moment when app starts
  useEffect(() => {
    volumeControl ? (volumeControl.current.value = '100') : null
  }, [])

  // sets the volume % in the context when user changes its value
  const hanldeVolumeChange = (e) => volume.setVolume(e.target.value)

  return (
    <div className='volume-input-container'>
      <input
        alt='volume input'
        className='volume-input'
        max='100'
        min='0'
        onChange={hanldeVolumeChange}
        ref={volumeControl}
        type='range'
      />
    </div>
  )
}
