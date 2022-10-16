import { useEffect, useRef, useState } from 'react'

import { PlayerContext } from './context'
import { useCurrentSong } from 'Player/hooks'

import { PlayerC } from 'Player'
import { continuePlaying } from 'utils/helpers'

import { useSelector } from 'react-redux'
export const Player = () => {
  // ELEMENT
  const track = useRef()

  const songs = useSelector(({ playlist }) => playlist)
  // States
  const [isLoadingPlayer, setIsLoadingPlayer] = useState(true)
  const [player, setPlayer] = useState({
    songs: songs || [],
    isPlaying: false,
    isMuted: false,
    volume: 1,
    autoplay: true,
    repeatAll: true,
    repeatOne: false,
    html_audio: track.current || {},
  })

  const { load, index, current, nextIndex, prevIndex, setLoadFalse } =
    useCurrentSong(player)

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
    if (songs) {
      setPlayer((player) => ({ ...player, songs }))
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
  }, [songs])

  useEffect(() => {
    if (!songs[0] && player.isPlaying) {
      turnPlay()
      setLoadFalse()
    }
  }, [songs])

  useEffect(() => {
    if (load && songs[0]) {
      setIsLoadingPlayer(false)
    } else {
      setIsLoadingPlayer(true)
    }
  }, [load, isLoadingPlayer, songs])

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
      <audio
        ref={track}
        src={songs ? (songs[0] ? songs[index].src : '') : ''}
      />
    </PlayerContext.Provider>
  )
}
