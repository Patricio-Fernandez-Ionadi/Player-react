// extenal
import RepeatOnIcon from '@mui/icons-material/RepeatOn'

// own
// context
import { usePlayerContext } from 'context'
// theme
import { StyledPlayerButton } from 'Player/style/styled'
// utils
import { colors } from 'utils/constants'

export const ControlRepeat = () => {
  const { repeat } = usePlayerContext()

  return (
    <StyledPlayerButton
      onClick={repeat.setRepeat}
      aria-label='enable repeat button'
    >
      {repeat.value ? (
        <RepeatOnIcon style={{ color: `${colors.primary_light}` }} />
      ) : (
        <RepeatOnIcon />
      )}
    </StyledPlayerButton>
  )
}
