import { useRef, useState } from 'react'

// context
import { usePlayerContext } from 'context'
// theme
import { StyledPlayerButton } from 'Player/style/styled'
import { MuteIcon } from './MuteIcon'

// components
import { ControlVolume, VolumeIcon } from '.'
import { ControlMute } from '../Mute'

export const Volume = () => {
  const { mute, volume } = usePlayerContext()

  const volumeButtonRef = useRef()

  const [anchorEl, setAnchorEl] = useState(null)
  window.addEventListener('click', (e) => {
    if (
      volumeButtonRef.current &&
      !volumeButtonRef.current.contains(e.target)
    ) {
      setAnchorEl(null)
      volume.volumePanel.close()
    } else {
      setAnchorEl(volumeButtonRef.current)
    }
  })

  const handleVolumeControl = (e) => {
    if (anchorEl && volume.volumePanel.value) {
      volume.volumePanel.close()
    } else {
      volume.volumePanel.open()
    }
  }

  return (
    <>
      {volume.volumePanel.value && <ControlMute />}
      <StyledPlayerButton
        onClick={handleVolumeControl}
        aria-label='volume control button'
        type='button'
        datatype='volumeButton'
        ref={volumeButtonRef}
      >
        {mute.value ? <MuteIcon /> : <VolumeIcon />}
      </StyledPlayerButton>
      {volume.volumePanel.value && <ControlVolume />}
    </>
  )
}
