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

  // playing?
  const [isPlaying, setIsPlaying] = useState(false)
  // volume
  const [playerVolume, setPlayerVolume] = useState(defaultVolume)
  const [volumePanelOpen, setVolumePanelOpen] = useState(false)
  // is muted?
  const [muted, setMuted] = useState(false)
  // current track (default in utils/helpers) (it updates when 'songs' from api are ready, it get setted in useEffect)
  const [currentSong, setCurentSong] = useState({
    listPosition: 0,
    index: 1,
  })
  const [percentSong, setPercentSong] = useState(0)

  const [repeatList, setRepeatList] = useState(false)
  /* ------------------ ################## ------------------  */

  // sometimes we need to wait until full data is loaded on element so we listen that event so we can set the duration of the currentSong state
  track.current?.addEventListener('loadedmetadata', (e) => {
    setCurentSong({
      ...currentSong,
      duration: getTrackDuration(e.target), // --> string '00:00'
      duration_secs: Math.round(e.target.duration), // --> number total secs
    })
  })

  // when songs are ready sets the currentTrack state
  useEffect(() => {
    if (songs) {
      setCurentSong({
        listPosition: 0,
        index: 1,
        song: songs[0].name,
        src: songs[0].src,
      })
    }
  }, [songs])
  /* ------------------ ################## ------------------  */

  // this effect changes the percentSong value for a progress bar at some info component
  // still doesn't have the ability to control from outside of this Effect
  useEffect(() => {
    if (isPlaying) {
      const percentInterval = setInterval(() => {
        setPercentSong(
          Math.floor(
            (track.current.currentTime * 100) / currentSong.duration_secs
          )
        )
      }, 1000)
      // this return clears the interval to prevent consecutives effects that could be running simultaneously
      return () => clearInterval(percentInterval)
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

  // for now just reset the corrent song and after a sec play it again
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

  // skip the current song, for now jus go foward until the list ends
  const next = () => {
    if (currentSong.index >= songs.length) {
      if (repeatList) {
        setCurentSong({
          listPosition: 0,
          index: 1,
          song: songs[0].name,
          src: songs[0].src,
        })
        if (isPlaying) {
          setTimeout(() => {
            playTrack(track.current)
          }, 1000)
        }
      } else {
        // disable next button
        console.log('no se puede seguir subiendo')
        return
      }
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
          playTrack(track.current)
        }, 1000)
      }
    }
  }

  // VOLUME
  // recives a value from 0 to 100 as string and set the current volume for the song parsing it in a value from 0 to 1 as a number
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

  // REPEAT
  const turnRepeat = () => turnBooleanState(repeatList, setRepeatList)

  /* ------------------ ################## ------------------  */

  // the context to be consumed for others components
  const playerContextObject = {
    currentTrack: track.current,

    isPlaying,
    currentSong,
    percentSong,
    playPause,
    prev,
    next,
    turnRepeat,
    mute: {
      value: muted,
      setMute: turnMute,
    },
    repeat: {
      value: repeatList,
      setRepeat: turnRepeat,
    },
    volume: {
      value: playerVolume,
      setVolume: handleVolume,
      volumePanel: {
        value: volumePanelOpen,
        open: () => setVolumePanelOpen(true),
        close: () => setVolumePanelOpen(false),
      },
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
