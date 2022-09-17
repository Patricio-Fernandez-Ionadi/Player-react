// import Context file
import { useEffect, useRef, useState } from 'react'
import { PlayerContext } from './PlayerContext'

const turnBooleanState = (state, updater) => updater(!state)
const defaultVolume = '1'

export const PlayerContextProvider = ({ children }, songs) => {
  // STATE OF PLAYER
  // playing?
  const [isPlaying, setIsPlaying] = useState(false)
  // volume
  const [playerVolume, setPlayerVolume] = useState(defaultVolume)

  // audio element where the song will be playing
  const track = useRef()

  // turn the player state (true o false) and pauses the audio or reload it and play it
  const playPause = () => {
    turnBooleanState(isPlaying, setIsPlaying)
    isPlaying
      ? track.current.pause()
      : (track.current.load(),
        // (track.current.volume = volume),
        track.current.play())
    return undefined
  }

  // track.current?.volume = playerVolume

  const playerContextObject = {
    playPause,
    isPlaying,
    volume: {
      value: playerVolume,
      setVolume: (val) => {
        setPlayerVolume(Number(val) / 100)
        track.current.volume = playerVolume
      },
    },
  }

  return (
    <PlayerContext.Provider value={playerContextObject}>
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
