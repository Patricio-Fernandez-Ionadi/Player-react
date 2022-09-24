import { usePlayerContext } from 'context'

import RepeatOnIcon from '@mui/icons-material/RepeatOn'
import { colors } from 'utils/constants'
import { StyledButton } from 'theme'

export const ControlRepeat = () => {
  const { repeat } = usePlayerContext()

  return (
    <StyledButton onClick={repeat.setRepeat} aria-label='enable repeat button'>
      {repeat.value ? (
        <RepeatOnIcon style={{ color: `${colors.primary_light}` }} />
      ) : (
        <RepeatOnIcon />
      )}
    </StyledButton>
  )
}
