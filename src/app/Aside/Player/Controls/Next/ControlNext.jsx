import SkipNextIcon from '@mui/icons-material/SkipNext'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { setCurrentIndex } from 'store'
import { setCurrentSong } from 'store'
import { turnLoading } from 'store'

export const ControlNext = () => {
  const dispatch = useDispatch()
  const player = useSelector(({ player }) => player)

  const { currentIndex } = player
  const { shuffle, repeatAll } = player
  const { length } = player.playlist
  const { lastSong } = player

  const disabled = player.lastSong ? 'btn-disabled' : ''

  const handleNextControl = (e) => {
    dispatch(turnLoading())
    dispatch(setCurrentSong(false))
    if (shuffle) {
      dispatch(setCurrentIndex(Math.floor(Math.random() * length)))
      return
    }

    if (lastSong) {
      if (repeatAll) {
        dispatch(setCurrentIndex(0))
      }
      return
    } else {
      dispatch(setCurrentIndex(currentIndex + 1))
    }
  }

  return (
    <button
      onClick={handleNextControl}
      aria-label='next button'
      className={`btn-player ${disabled}`}
    >
      <SkipNextIcon />
    </button>
  )
}
