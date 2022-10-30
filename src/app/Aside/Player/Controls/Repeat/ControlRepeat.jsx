// extenal
import RepeatOnIcon from '@mui/icons-material/RepeatOn'

// context
import { useDispatch, useSelector } from 'react-redux'
import { setRepeat } from 'store'

export const ControlRepeat = () => {
  const dispatch = useDispatch()
  const { repeatAll } = useSelector(({ player }) => player)

  const handleRepeatAll = () => dispatch(setRepeat())

  return (
    <button
      className={`${repeatAll ? 'btn btn-active' : 'btn'}`}
      onClick={handleRepeatAll}
      aria-label='enable repeat button'
    >
      {repeatAll ? <RepeatOnIcon /> : <RepeatOnIcon />}
    </button>
  )
}
