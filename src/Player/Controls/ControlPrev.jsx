// external
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'

// own
// context
import { usePlayerContext } from 'context'

export const ControlPrev = () => {
  const { prev } = usePlayerContext()
  return (
    <button className='btn' onClick={prev} aria-label='prev button'>
      <SkipPreviousIcon />
    </button>
  )
}
