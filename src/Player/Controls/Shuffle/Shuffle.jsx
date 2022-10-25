import { useState } from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle'

import { usePlayerContext } from 'Player/Context'

export const Shuffle = () => {
  const { shuffle } = usePlayerContext()

  const [shuffleActive, setShuffleActive] = useState(false)
  const handleShuffleToggle = () => {
    shuffle()
    setShuffleActive(!shuffleActive)
  }
  return (
    <button
      onClick={handleShuffleToggle}
      className={`btn auxiliar-control ${shuffleActive ? 'active' : ''}`}
    >
      <ShuffleIcon />
    </button>
  )
}
