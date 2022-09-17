// import Context file
import { useRef, useState } from 'react'
import { PlayerContext } from './PlayerContext'

const turnBooleanState = (state, updater) => updater(!state)
const defaultVolume = '1'

export const PlayerContextProvider = ({ children }, songs) => {
  // STATE OF PLAYER
  // playing?
  const [isPlaying, setIsPlaying] = useState(false)
  // volume
  const [playerVolume, setPlayerVolume] = useState(defaultVolume)
  // is muted?
  const [muted, setMuted] = useState(false)

  // AUDIO ELEMENT
  const track = useRef()

  // turn the player state (true o false) and pauses the audio play it
  const playPause = () => {
    turnBooleanState(isPlaying, setIsPlaying)
    isPlaying ? track.current.pause() : track.current.play()
    console.log(track.current.currentTime)
    return undefined
  }
  const prev = () => {
    if (track.current.currentTime > 0) {
      track.current.load()
      if (isPlaying) {
        setTimeout(() => {
          track.current.play()
        }, 1000)
      }
    }
  }

  // handles the track volume from 0 to 1
  const handleVolume = (val) => {
    setPlayerVolume(Number(val) / 100)
    track.current.volume = playerVolume
  }
  // turn the mute / unmute
  const turnMute = () => {
    turnBooleanState(muted, setMuted)
    track.current.muted = !muted
    return undefined
  }

  const playerContextObject = {
    playPause,
    isPlaying,
    prev,
    volume: {
      value: playerVolume,
      setVolume: handleVolume,
    },
    mute: {
      value: muted,
      turn: turnMute,
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
  // format: track.current.src.split('.').pop()
  }
*/
