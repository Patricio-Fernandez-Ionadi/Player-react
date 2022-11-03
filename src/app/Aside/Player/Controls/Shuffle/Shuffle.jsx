import ShuffleIcon from '@mui/icons-material/Shuffle'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { turnShuffle } from 'store'

export const Shuffle = () => {
  const player = useSelector(({ player }) => player)
  const dispatch = useDispatch()
  const handleShuffleToggle = () => {
    dispatch(turnShuffle())
  }
  return (
    <button
      onClick={handleShuffleToggle}
      className={`btn auxiliar-control ${player.shuffle ? 'active' : ''}`}
    >
      <ShuffleIcon />
    </button>
  )
}
