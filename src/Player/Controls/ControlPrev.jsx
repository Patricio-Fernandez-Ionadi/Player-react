// external
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'

// own
import { usePlayerContext } from 'context'
import { StyledPlayerButton } from 'theme'

export const ControlPrev = () => {
  const { prev } = usePlayerContext()
  return (
    <StyledPlayerButton onClick={prev} aria-label='prev button'>
      <SkipPreviousIcon />
    </StyledPlayerButton>
  )
}
