import { useRef } from 'react'
// context
import { PlayerContext } from './PlayerContext'
import { useDispatch, useSelector } from 'react-redux'
import { setRefElement, setSongDuration } from 'store'

import { getTrackDuration } from 'utils/helpers'

export const PlayerContextProvider = ({ children }) => {
  // AUDIO ELEMENT
  const track = useRef()
  // consume store
  const dispatch = useDispatch()
  const { currentSong } = useSelector(({ player }) => player)

  /* ------------------ ################## ------------------  */
  // sometimes we need to wait until full data is loaded on element so we listen that event so we can set the duration of the currentSong state
  track.current?.addEventListener('loadedmetadata', () => {
    const { timer, secs } = getTrackDuration(track.current)
    dispatch(setRefElement(track.current))
    dispatch(setSongDuration(timer, secs))
  })
  // console.log(currentSong)
  /* ------------------ ################## ------------------  */

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
