import { useEffect, useRef } from 'react'
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
  const { currentSong, isPlaying } = songsStore
  /* ------------------ ################## ------------------  */

  // sometimes we need to wait until full data is loaded on element so we listen that event so we can set the duration of the currentSong state
  track.current?.addEventListener('loadedmetadata', (e) => {
    dispatch(setRefElement(track.current))
    dispatch(
      setSongDuration(getTrackDuration(e.target), Math.round(e.target.duration))
    )
  })
  /* ------------------ ################## ------------------  */

  // this effect changes the percentSong value for a progress bar at some info component
  // still doesn't have the ability to control from outside of this Effect
  useEffect(() => {
    if (isPlaying) {
      const percentInterval = setInterval(() => {
        if (currentSong.duration_sec) {
          dispatch({
            type: 'SET_PERCENT_PLAYED',
            payload: Math.floor(
              (track.current.currentTime * 100) / currentSong.duration_sec
            ),
          })
        }
      }, 1000)
      // this return clears the interval to prevent consecutives effects that could be running simultaneously
      return () => clearInterval(percentInterval)
    }
  }, [isPlaying, currentSong.duration_sec])
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
