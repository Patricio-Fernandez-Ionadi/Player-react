import { usePlayerContext } from 'context'
import React, { useEffect, useRef } from 'react'
export const ControlVolume = () => {
  const { volume } = usePlayerContext()
  const volumeControl = useRef()

  useEffect(() => {
    volumeControl.current.value = '100'
  }, [volumeControl.current])

  const hanldeVolumeChange = (e) => volume.setVolume(e.target.value)

  return (
    <div>
      <input type='range' ref={volumeControl} onChange={hanldeVolumeChange} />
    </div>
  )
}
