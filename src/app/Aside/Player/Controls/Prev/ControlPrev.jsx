import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { setCurrentSong } from 'store'
import { turnLoading } from 'store'
import { setCurrentIndex } from 'store'

export const ControlPrev = () => {
  const player = useSelector(({ player }) => player)
  const dispatch = useDispatch()

  const { firstSong, repeatAll } = player
  const { currentIndex } = player

  const disabled = firstSong ? 'btn-disabled' : ''

  const handlePrevControl = (e) => {
    dispatch(setCurrentSong(false))
    dispatch(turnLoading())
    if (firstSong) {
      if (repeatAll) {
        dispatch(setCurrentIndex(length - 1))
      }
      return
    } else {
      dispatch(setCurrentIndex(currentIndex - 1))
    }
  }

  return (
    <button
      onClick={handlePrevControl}
      className={`btn-player ${disabled}`}
      aria-label='prev button'
    >
      <SkipPreviousIcon />
    </button>
  )
}
