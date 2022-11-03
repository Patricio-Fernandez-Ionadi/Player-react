// external
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

import { turnPlaying } from 'store'

// utils
import { pauseTrack, playTrack } from 'utils/helpers'

export const ControlPlayPause = () => {
  const dispatch = useDispatch()
  const player = useSelector(({ player }) => player)
  const { isPlaying, audio } = player

  const playPause = () => {
    dispatch(turnPlaying())
    isPlaying ? pauseTrack(audio) : playTrack(audio)
  }

  return (
    <button
      className='btn-player play-button'
      onClick={playPause}
      aria-label='play/pause button'
    >
      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    </button>
  )
}
