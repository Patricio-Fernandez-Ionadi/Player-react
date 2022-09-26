import { useRef } from 'react'
// context
import { useDispatch, useSelector } from 'react-redux'
import { setRefElement, setSongDuration } from 'store'
import { PlayerContext } from './PlayerContext'
// utils
import { getTrackDuration } from 'utils/helpers'

export const PlayerContextProvider = ({ children }) => {
  // AUDIO ELEMENT
  const track = useRef()
  // consume store
  const songsStore = useSelector(({ player }) => player)
  const dispatch = useDispatch()
  const { currentSong } = songsStore
  /* ------------------ ################## ------------------  */

  // sometimes we need to wait until full data is loaded on element so we listen that event so we can set the duration of the currentSong state
  track.current?.addEventListener('loadedmetadata', (e) => {
    dispatch(setRefElement(track.current))
    dispatch(
      setSongDuration(getTrackDuration(e.target), Math.round(e.target.duration))
    )
  })

  /* ------------------ ################## ------------------  */

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

  return (
    <PlayerContext.Provider value={{}}>
      {children}
      <audio ref={track} src={currentSong.src} />
    </PlayerContext.Provider>
  )
}

/* ------------------ ################## ------------------ ################## ------------------ */

/*
interface Song {
  volume: number (from 0 to 1)
  muted: boolean (false)
  src: string
  currentSrc: string
  ended: boolean (false)
  duration:number (ms)
  defaultMuted:boolean (false)
  autoplay: boolean (false)
  loop: boolean (false)
  currentTime: number (0) (ms)

  title: string

  // format: track.current.src.split('.').pop()
  }
*/
