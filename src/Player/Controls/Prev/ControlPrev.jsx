import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { usePlayerContext } from 'Player/Context'

export const ControlPrev = () => {
  const { prevSong, player } = usePlayerContext()

  return (
    <button
      onClick={player.firstSong ? () => {} : prevSong}
      className={`btn ${player.firstSong ? 'btn-disabled' : ''}`}
      aria-label='prev button'
    >
      <SkipPreviousIcon />
    </button>
  )
}
