import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'

import { useSelector } from 'react-redux'

export const ControlPrev = ({ prev }) => {
  const player = useSelector(({ player }) => player)
  const { firstSong } = player
  const disabled = firstSong ? 'btn-disabled' : ''

  return (
    <button
      onClick={prev}
      className={`btn-player ${disabled}`}
      aria-label='prev button'
    >
      <SkipPreviousIcon />
    </button>
  )
}
