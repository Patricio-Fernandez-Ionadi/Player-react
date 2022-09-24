import { useEffect, useRef } from 'react'
import { usePlayerContext } from 'context'

import './style/index.css'

export const ControlVolume = () => {
  // Input element
  const volumeControl = useRef(HTMLInputElement)
  // context
  const { volume, mute } = usePlayerContext()

  // sets the default value for the volume to 100% at the moment when app starts or uses the current value of state
  useEffect(() => {
    volumeControl
      ? (volumeControl.current.value = `${volume.value * 100}` || '100')
      : null
  }, [])

  // sets the volume % in the context when user changes its value
  // if muted set mute false
  const hanldeVolumeChange = (e) => {
    volume.setVolume(e.target.value)
    if (mute.value) mute.setMute()
  }

  return (
    <div className='volume-input-container'>
      <input
        alt='volume input'
        aria-label='volume input'
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
