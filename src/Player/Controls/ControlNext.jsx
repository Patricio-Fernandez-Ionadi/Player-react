// external
import SkipNextIcon from '@mui/icons-material/SkipNext'

// own
// context
import { usePlayerContext } from 'context'
// theme
import { StyledPlayerButton } from 'Player/style/styled'

export const ControlNext = () => {
  const { next } = usePlayerContext()
  return (
    <StyledPlayerButton onClick={next} aria-label='next button'>
      <SkipNextIcon />
    </StyledPlayerButton>
  )
}
