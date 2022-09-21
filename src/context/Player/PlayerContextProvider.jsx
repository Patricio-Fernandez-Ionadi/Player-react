// import Context file
import { useEffect, useRef, useState } from 'react'
// context
import { PlayerContext } from './PlayerContext'
// hooks
import { useAllSongs } from 'hooks/useAllSongs'
// utils
import {
  defaultVolume,
  getTrackDuration,
  pauseTrack,
  playTrack,
  turnBooleanState,
} from 'utils/helpers'

// const duration = getTrackDuration(track.current) // string '00:00'
// const totalSecs = Math.round(track.current?.duration)

export const PlayerContextProvider = ({ children }) => {
  // AUDIO ELEMENT
  const track = useRef()
  // Songs List
  const songs = useAllSongs()
  /* ------------------ ################## ------------------  */
  // console.log(track.current?.ended)

  // playing?
  const [isPlaying, setIsPlaying] = useState(false)
  // volume
  const [playerVolume, setPlayerVolume] = useState(defaultVolume)
  // is muted?
  const [muted, setMuted] = useState(false)
  // current track (default is the first item from the list) (it updates when 'songs' from api are ready, it get setted in useEffect)
  const [currentSong, setCurentSong] = useState({
    listPosition: 0,
    index: 1,
    song: '',
    src: '',
    duration: '',
  })
  const [percentSong, setPercentSong] = useState(0)
  /* ------------------ ################## ------------------  */

  // sometimes we need to wait until full data is loaded on element so we listen that event so we can set the duration of the currentSong state
  track.current?.addEventListener('loadedmetadata', (e) => {
    setCurentSong({
      ...currentSong,
      duration: getTrackDuration(e.target),
      duration_secs: Math.round(e.target.duration),
    })
  })

  useEffect(() => {
    if (songs) {
      // when songs are ready sets the currentTrack state
      setCurentSong({
        listPosition: 0,
        index: 1,
        song: songs[0].name,
        src: songs[0].src,
      })
    }
  }, [songs])

  // console.log(currentSong.duration_secs)
  useEffect(() => {
    if (isPlaying) {
      const percentInterval = setInterval(() => {
        setPercentSong(
          Math.floor(
            (track.current.currentTime * 100) / currentSong.duration_secs
          )
        )
      }, 1000)
      return () => {
        return clearInterval(percentInterval)
      }
    }
  }, [isPlaying])
  /* ------------------ ################## ------------------  */

  // CONTROLS
  // turn the player state (true o false) and pauses the audio play it
  const playPause = () => {
    turnBooleanState(isPlaying, setIsPlaying)
    isPlaying ? pauseTrack(track.current) : playTrack(track.current)
    return undefined
  }

  const prev = (e) => {
    // console.log(e.detail) // veces seguidas que se recibe el evento de click
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
    if (currentSong.index >= songs.length) {
      console.log('no se puede seguir subiendo')
      return
    } else {
      setCurentSong((prev) => ({
        listPosition: prev.listPosition + 1,
        index: prev.index + 1,
        song: songs[prev.listPosition + 1].name,
        listPosition: prev.listPosition + 1,
        src: songs[prev.listPosition + 1].src,
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
    isPlaying,
    currentSong,
    playPause,
    prev,
    next,
    percentSong,
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

/* ------------------ ################## ------------------ ################## ------------------ */

/*
interface Song {
  volume: number (from 0 to 1)
  muted: boolean (false)
  src: string
  currentSrc: string
  title: string
  ended: boolean (false)
  duration:number (ms)
  defaultMuted:boolean (false)
  autoplay: boolean (false)
  loop: boolean (false)
  currentTime: number (0) (ms)



  // format: track.current.src.split('.').pop()
  }
*/
