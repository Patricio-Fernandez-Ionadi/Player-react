import SkipNextIcon from '@mui/icons-material/SkipNext'

import { usePlayerContext } from 'Player/Context'

export const ControlNext = () => {
  const { nextSong, player } = usePlayerContext()

  return (
    <button
      onClick={player.lastSong ? () => {} : nextSong}
      aria-label='next button'
      className={`btn-player ${player.lastSong ? 'btn-disabled' : ''}`}
    >
      <SkipNextIcon />
    </button>
  )
}
