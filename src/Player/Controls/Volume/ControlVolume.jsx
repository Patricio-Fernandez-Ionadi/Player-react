import { useEffect, useRef } from 'react'

// context
import { useDispatch, useSelector } from 'react-redux'
import { turnMute, setVolume } from 'store'
// styles
import './style/index.css'

export const ControlVolume = () => {
  // store
  const dispatch = useDispatch()
  const { isMuted, html_audio, volume } = useSelector(({ player }) => player)
  // Input element
  const volumeControl = useRef(HTMLInputElement)

  // sets the default value for the volume to 100% at the moment when app starts or uses the current value of state
  useEffect(() => {
    volumeControl
      ? (volumeControl.current.value = `${volume * 100}` || '100')
      : null
  }, [])

  // sets the volume % in the context when user changes its value
  // if muted set mute false
  const hanldeVolumeChange = (e) => {
    dispatch(setVolume(e.target.value, html_audio))
    if (isMuted) {
      dispatch(turnMute(html_audio, isMuted))
    }
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
