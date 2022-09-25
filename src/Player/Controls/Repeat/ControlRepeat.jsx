// extenal
import RepeatOnIcon from '@mui/icons-material/RepeatOn'

// context
import { useDispatch, useSelector } from 'react-redux'
// theme
import { StyledPlayerButton } from 'Player/style/styled'
// utils
import { colors } from 'utils/constants'

export const ControlRepeat = () => {
  const dispatch = useDispatch()
  const { repeatAll } = useSelector(({ player }) => player)

  const handleRepeatAll = () => {
    dispatch({
      type: 'SET_REPEAT_ALL',
    })
  }

  return (
    <StyledPlayerButton
      onClick={handleRepeatAll}
      aria-label='enable repeat button'
    >
      {repeatAll ? (
        <RepeatOnIcon style={{ color: `${colors.primary_light}` }} />
      ) : (
        <RepeatOnIcon />
      )}
    </StyledPlayerButton>
  )
}
