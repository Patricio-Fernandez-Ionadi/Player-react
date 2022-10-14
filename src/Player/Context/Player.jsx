import { useEffect, useRef, useState } from 'react'

import { PlayerContext } from './context'
import { useCurrentSong, useAllSongs } from 'Player/hooks'

import { PlayerC } from 'Player'
import { continuePlaying } from 'utils/helpers'

export const Player = () => {
  // ELEMENT
  const track = useRef()
  const trackList = useAllSongs()
  // States
  const [isLoadingPlayer, setIsLoadingPlayer] = useState(true)
  const [player, setPlayer] = useState({
    songs: trackList || [],
    isPlaying: false,
    isMuted: false,
    volume: 1,
    autoplay: true,
    repeatAll: true,
    repeatOne: false,
    html_audio: track.current || {},
  })

  const { load, index, current, nextIndex, prevIndex } = useCurrentSong(player)

  // Functions
  const nextSong = () => {
    setIsLoadingPlayer(true)
    nextIndex()
    player.isPlaying && continuePlaying(player.html_audio)
  }

  const prevSong = () => {
    setIsLoadingPlayer(true)
    prevIndex()
    player.isPlaying && continuePlaying(player.html_audio)
  }

  const turnPlay = () => {
    setPlayer((player) => ({ ...player, isPlaying: !player.isPlaying }))
  }

  // Helpers
  const setCurrentSong = () => {
    if (current) {
      setPlayer((player) => ({ ...player, currentSong: current }))
    }
  }
  const setHtmlAudio = () => {
    if (track.current) {
      setPlayer((player) => ({ ...player, html_audio: track.current }))
    }
  }
  const setSongs = () => {
    if (trackList) {
      setPlayer((player) => ({ ...player, songs: trackList }))
    }
  }

  // Effect
  useEffect(() => {
    setCurrentSong()
  }, [current])

  useEffect(() => {
    setHtmlAudio()
  }, [track.current])

  useEffect(() => {
    setSongs()
  }, [trackList])

  useEffect(() => {
    if (load) {
      setIsLoadingPlayer(false)
    } else {
      setIsLoadingPlayer(true)
    }
  }, [load, isLoadingPlayer])

  const playerContext = {
    player,
    isLoadingPlayer,
    nextSong,
    turnPlay,
    prevSong,
  }

  return (
    <PlayerContext.Provider value={playerContext}>
      <PlayerC />
      <audio ref={track} src={trackList ? trackList[index]?.src : ''} />
    </PlayerContext.Provider>
  )
}
