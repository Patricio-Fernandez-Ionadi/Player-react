import { useRef, useState } from 'react'

// context
import { useSelector } from 'react-redux'
// theme
import { MuteIcon } from './MuteIcon'
import './style/index.css'
import '../../../theme/index.css'

// components
import { ControlVolume, VolumeIcon } from '.'
import { ControlMute } from '../Mute'

export const Volume = () => {
  const { isMuted } = useSelector(({ player }) => player)
  const volumeButtonRef = useRef()

  const [volumePanelOpen, setVolumePanelOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  let outsideOfButton = (e) =>
    volumeButtonRef.current && !volumeButtonRef.current.contains(e.target)

  // if users click on button sets the anchorEl, otherwise its goin to be null
  window.onclick = (e) => {
    if (outsideOfButton(e)) {
      setAnchorEl(null)
      setVolumePanelOpen(false)
    } else setAnchorEl(volumeButtonRef.current)
  }

  // if anchorEl exist and the panel is already open: close it, else if anchorEl is null or panel is closed: open it
  const handleVolumeControl = () => {
    if (anchorEl && volumePanelOpen) {
      setVolumePanelOpen(false)
    } else {
      setVolumePanelOpen(true)
    }
  }

  return (
    <div className='volume-control-container'>
      {(volumePanelOpen || isMuted) && <ControlMute />}
      <button
        onClick={handleVolumeControl}
        aria-label='volume control button'
        type='button'
        ref={volumeButtonRef}
        className='btn volume-button'
      >
        {isMuted ? <MuteIcon /> : <VolumeIcon />}
      </button>
      {volumePanelOpen && <ControlVolume />}
    </div>
  )
}
