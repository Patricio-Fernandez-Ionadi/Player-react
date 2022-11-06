import SkipNextIcon from '@mui/icons-material/SkipNext'

import { useSelector } from 'react-redux'

export const ControlNext = ({ next }) => {
  const player = useSelector(({ player }) => player)

  const disabled = player.lastSong ? 'btn-disabled' : ''

  return (
    <button
      onClick={next}
      aria-label='next button'
      className={`btn-player ${disabled}`}
    >
      <SkipNextIcon />
    </button>
  )
}
