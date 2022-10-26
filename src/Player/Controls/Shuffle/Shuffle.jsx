import { useState } from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle'

import { usePlayerContext } from 'Player/Context'

export const Shuffle = () => {
  const { shuffle, player } = usePlayerContext()

  const [shuffleActive, setShuffleActive] = useState(player.shuffle)
  const handleShuffleToggle = () => {
    shuffle()
    setShuffleActive(!player.shuffle)
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
