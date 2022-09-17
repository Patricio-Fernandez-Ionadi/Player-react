// import Context file
import { useRef, useState } from 'react'
import { PlayerContext } from './PlayerContext'

const turnBooleanState = (state, updater) => updater(!state)

export const PlayerContextProvider = ({ children }, songs) => {
  // state of player
  const [isPlaying, setIsPlaying] = useState(false)
  // audio element where the song will be playing
  const track = useRef()

  const volume = 0.05

  // turn the player state (true o false) and pauses the audio or reload it and play it
  const playPause = () => {
    turnBooleanState(isPlaying, setIsPlaying)
    isPlaying
      ? track.current.pause()
      : (track.current.load(),
        (track.current.volume = volume),
        track.current.play())
    return undefined
  }

  return (
    <PlayerContext.Provider
      value={{
        playPause,
        isPlaying,
      }}
    >
      {children}
      <audio ref={track} src='assets/media/hardcore.mp3' />
    </PlayerContext.Provider>
  )
}

/* 
interface Song {
  volume: number (from 0 to 1)
  muted: boolean (false)
  src: string
  title: string
  ended: boolean (false)
  duration:number (ms)
  defaultMuted:boolean (false)
  autoplay: boolean (false)
  format: track.current.src.split('.').pop()
  }
*/
