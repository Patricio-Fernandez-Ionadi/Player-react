import { useEffect, useRef } from 'react'
import { usePlayerContext } from 'context'

export const ControlVolume = () => {
  const { volume } = usePlayerContext()
  const volumeControl = useRef()

  useEffect(() => {
    volumeControl.current.value = '100'
  }, [volumeControl.current])

  const hanldeVolumeChange = (e) => volume.setVolume(e.target.value)

  return (
    <input type='range' ref={volumeControl} onChange={hanldeVolumeChange} />
  )
}
