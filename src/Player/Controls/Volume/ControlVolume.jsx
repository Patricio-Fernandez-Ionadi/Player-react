import { useEffect, useRef } from 'react'
import { usePlayerContext } from 'context'

import './style/index.css'
import styled from 'styled-components'

const Marker = styled.div`
  && {
    left: ${(props) => props.$volume};
  }
`

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
      <Marker
        className='marker'
        $volume={`${Math.round(volume.value * 100)}px`}
      />
      <input
        type='range'
        className='volume-input'
        ref={volumeControl}
        onChange={hanldeVolumeChange}
        alt='volume input'
      />
    </div>
  )
}
