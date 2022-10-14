import { useState } from 'react'
// external
import SkipNextIcon from '@mui/icons-material/SkipNext'
// store
// import { useDispatch, useSelector } from 'react-redux'
// import { nextSong, startAgain } from 'store'
// utils
import { continuePlaying } from 'utils/helpers'
import { usePlayerContext } from 'Player/Context'

export const ControlNext = () => {
  // store
  // const dispatch = useDispatch()
  // const { html_audio, currentSong, songs, isPlaying, repeatAll } = useSelector(
  //   ({ player }) => player
  // )

  const { nextSong, player } = usePlayerContext()

  const [isEnabled, setIsEnabled] = useState(true)

  // skip the current song, if list is finished and repeat mode enabled starts again
  const handleNextControl = () => {
    // this code only set the state to enable o disabled for styles of next button
    // if (repeatAll) {
    //   setIsEnabled(true)
    // } else if (
    //   !repeatAll &&
    //   (currentSong.index + 1 === songs.length ||
    //     currentSong.index === songs.length)
    // ) {
    //   setIsEnabled(false)
    // }
    // if (currentSong.index >= songs.length) {
    //   if (repeatAll) {
    //     dispatch(startAgain())
    //   }
    //   isPlaying && continuePlaying(html_audio)
    // } else {
    //   dispatch(nextSong())
    //   isPlaying && continuePlaying(html_audio)
    // }
    nextSong()
    player.isPlaying && continuePlaying(player.html_audio)
    console.log('next')
  }

  // autoplay if is possible
  // if (html_audio?.ended && isEnabled) next()

  return (
    <button
      onClick={handleNextControl}
      aria-label='next button'
      className={`${isEnabled ? 'btn' : 'btn btn-disabled'}`}
    >
      <SkipNextIcon />
    </button>
  )
}
