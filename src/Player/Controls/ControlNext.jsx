// external
import SkipNextIcon from '@mui/icons-material/SkipNext'
// store
import { useDispatch, useSelector } from 'react-redux'
import { nextSong, startAgain } from 'store'
// theme
import { StyledPlayerButton } from 'Player/style/styled'
// utils
import { continuePlaying } from 'utils/helpers'

export const ControlNext = () => {
  // store
  const dispatch = useDispatch()
  const { html_audio, currentSong, songs, isPlaying, repeatAll } = useSelector(
    ({ player }) => player
  )

  // skip the current song, if list is finished and repeat mode enabled starts again
  const next = () => {
    if (currentSong.index >= songs.length) {
      repeatAll && dispatch(startAgain())
      isPlaying
        ? continuePlaying(html_audio)
        : console.log('no se puede seguir subiendo') // disable next button
    } else {
      dispatch(nextSong())
      isPlaying && continuePlaying(html_audio)
    }
  }

  return (
    <StyledPlayerButton onClick={next} aria-label='next button'>
      <SkipNextIcon />
    </StyledPlayerButton>
  )
}
