// external
import SkipNextIcon from '@mui/icons-material/SkipNext'

// own
import { usePlayerContext } from 'context'
import { StyledPlayerButton } from 'theme'

export const ControlNext = () => {
  const { next } = usePlayerContext()
  return (
    <StyledPlayerButton onClick={next} aria-label='next button'>
      <SkipNextIcon />
    </StyledPlayerButton>
  )
}
