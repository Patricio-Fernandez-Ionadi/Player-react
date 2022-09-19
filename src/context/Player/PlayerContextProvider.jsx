// import Context file
import { useRef, useState } from 'react'
import { PlayerContext } from './PlayerContext'

const turnBooleanState = (state, updater) => updater(!state)
const defaultVolume = '1' // number from 0 to 1
const getSongName = (list, position) => {
  return list[position].split('/').pop().split('.', 1)[0]
}

export const PlayerContextProvider = ({ children, trackList }) => {
  // AUDIO ELEMENT
  const track = useRef()
  /* ------------------ ################## ------------------  */

  // STATE OF PLAYER
  // playing?
  const [isPlaying, setIsPlaying] = useState(false)
  // volume
  const [playerVolume, setPlayerVolume] = useState(defaultVolume)
  // is muted?
  const [muted, setMuted] = useState(false)
  // current track (default primer item de la lista)
  const [currentSong, setCurentSong] = useState({
    listPosition: 0,
    index: 1,
    song: getSongName(trackList, 0),
    src: trackList[0],
  })
  console.log(currentSong)
  /* ------------------ ################## ------------------  */

  // CONTROLS
  // turn the player state (true o false) and pauses the audio play it
  const playPause = () => {
    turnBooleanState(isPlaying, setIsPlaying)
    isPlaying ? track.current?.pause() : track.current?.play()
    return undefined
  }
  const prev = (e) => {
    console.log(e.detail) // veces seguidas que se recibe el evento de click

    if (track.current.currentTime > 0) {
      track.current.load()
      if (isPlaying) {
        setTimeout(() => {
          track.current.play()
        }, 1000)
      }
    }
  }

  const next = () => {
    if (currentSong.index >= trackList.length) {
      console.log('no se puede seguir subiendo')
      return
    } else {
      setCurentSong((prev) => ({
        listPosition: prev.listPosition + 1,
        index: prev.index + 1,
        song: getSongName(trackList, prev.listPosition + 1),
        listPosition: prev.listPosition + 1,
        src: trackList[prev.listPosition + 1],
      }))

      if (isPlaying) {
        setTimeout(() => {
          track.current.play()
        }, 1000)
      }
    }
  }

  // VOLUME
  // handles the track volume from 0 to 1
  const handleVolume = (val) => {
    setPlayerVolume(Number(val) / 100)
    track.current.volume = playerVolume
  }

  // MUTE
  // turn the mute / unmute
  const turnMute = () => {
    turnBooleanState(muted, setMuted)
    track.current.muted = !muted
    return undefined
  }
  /* ------------------ ################## ------------------  */

  const playerContextObject = {
    playPause,
    isPlaying,
    prev,
    next,
    currentSong,
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
      <audio ref={track} src={currentSong.src} />
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
