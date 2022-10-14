import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { usePlayerContext } from 'Player/Context'

export const ControlPrev = () => {
  const { prevSong } = usePlayerContext()

  return (
    <button onClick={prevSong} className='btn' aria-label='prev button'>
      <SkipPreviousIcon />
    </button>
  )
}

// for now just reset the corrent song and after a sec play it again
// const prev = (e) => {
//   // console.log(e.detail) // veces seguidas que se recibe el evento de click
//   if (track.current.currentTime > 0) {
//     track.current.load()
//     if (isPlaying) {
//       setTimeout(() => {
//         track.current.play()
//       }, 1000)
//     }
//   }
// }
