import { useState } from 'react'
// external
import SkipNextIcon from '@mui/icons-material/SkipNext'

// utils
import { usePlayerContext } from 'Player/Context'

export const ControlNext = () => {
  const { nextSong } = usePlayerContext()

  const [isEnabled, setIsEnabled] = useState(true)

  return (
    <button
      onClick={nextSong}
      aria-label='next button'
      className={`${isEnabled ? 'btn' : 'btn btn-disabled'}`}
    >
      <SkipNextIcon />
    </button>
  )
}
