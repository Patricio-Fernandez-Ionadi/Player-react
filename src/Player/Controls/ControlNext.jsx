import SkipNextIcon from '@mui/icons-material/SkipNext'

import { usePlayerContext } from 'context'
import { StyledButton } from 'theme'

export const ControlNext = () => {
  const { next } = usePlayerContext()
  return (
    <StyledButton onClick={next} aria-label='next button'>
      <SkipNextIcon />
    </StyledButton>
  )
}
