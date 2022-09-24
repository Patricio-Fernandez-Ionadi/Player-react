// external
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'

// own
// context
import { usePlayerContext } from 'context'
// theme
import { StyledPlayerButton } from 'Player/style/styled'

export const ControlPrev = () => {
  const { prev } = usePlayerContext()
  return (
    <StyledPlayerButton onClick={prev} aria-label='prev button'>
      <SkipPreviousIcon />
    </StyledPlayerButton>
  )
}
