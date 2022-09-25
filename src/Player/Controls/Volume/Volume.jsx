import { useRef, useState } from 'react'

// context
import { useSelector } from 'react-redux'
// theme
import { StyledPlayerButton } from 'Player/style/styled'
import { MuteIcon } from './MuteIcon'

// components
import { ControlVolume, VolumeIcon } from '.'
import { ControlMute } from '../Mute'

export const Volume = () => {
  const { isMuted } = useSelector(({ player }) => player)

  const volumeButtonRef = useRef()

  const [volumePanelOpen, setVolumePanelOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  window.addEventListener('click', (e) => {
    if (
      volumeButtonRef.current &&
      !volumeButtonRef.current.contains(e.target)
    ) {
      setAnchorEl(null)
      setVolumePanelOpen(false)
    } else {
      setAnchorEl(volumeButtonRef.current)
    }
  })

  const handleVolumeControl = () => {
    if (anchorEl && volumePanelOpen) {
      setVolumePanelOpen(false)
    } else {
      setVolumePanelOpen(true)
    }
  }

  return (
    <>
      {volumePanelOpen && <ControlMute />}
      <StyledPlayerButton
        onClick={handleVolumeControl}
        aria-label='volume control button'
        type='button'
        ref={volumeButtonRef}
      >
        {isMuted ? <MuteIcon /> : <VolumeIcon />}
      </StyledPlayerButton>
      {volumePanelOpen && <ControlVolume />}
    </>
  )
}
