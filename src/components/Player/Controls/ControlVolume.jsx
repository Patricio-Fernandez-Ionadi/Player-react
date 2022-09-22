import { useEffect, useRef } from 'react'
import { usePlayerContext } from 'context'

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
    <input
      type='range'
      ref={volumeControl}
      onChange={hanldeVolumeChange}
      alt='volume input'
    />
  )
}
