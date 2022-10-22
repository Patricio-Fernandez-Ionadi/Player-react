import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { PlayerContext } from './context'
import { useCurrentSong } from 'Player/hooks'

import { continuePlaying } from 'utils/helpers'

export const PlayerProvider = ({ children }) => {
  // ELEMENT
  const track = useRef()
  // States
  const { currentPlaylist } = useSelector(({ playlist }) => playlist)
  const { songs, name } = currentPlaylist
  const [isLoadingPlayer, setIsLoadingPlayer] = useState(true)

  const [player, setPlayer] = useState({
    playlistName: name,
    songs,
    isPlaying: false,
    isMuted: false,
    volume: 1,
    autoplay: true,
    repeatAll: true,
    repeatOne: false,
    audio: track.current,
  })

  const { load, index, song, nextIndex, prevIndex, setLoadFalse } =
    useCurrentSong(player)

  // Functions
  const nextSong = () => {
    setIsLoadingPlayer(true)
    nextIndex()
    player.isPlaying && continuePlaying(player.audio)
  }

  const prevSong = () => {
    setIsLoadingPlayer(true)
    prevIndex()
    player.isPlaying && continuePlaying(player.audio)
  }

  const turnPlay = () => {
    setPlayer((player) => ({ ...player, isPlaying: !player.isPlaying }))
  }

  // Helpers
  const setCurrentSong = () => {
    if (song) {
      setPlayer((player) => ({ ...player, currentSong: song }))
    }
  }
  const setHtmlAudio = () => {
    if (track.current) {
      setPlayer((player) => ({ ...player, audio: track.current }))
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
  }, [song])

  useEffect(() => {
    setHtmlAudio()
  }, [track.current])

  useEffect(() => {
    setSongs()
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

  // Context
  const playerContext = {
    player,
    isLoadingPlayer,
    nextSong,
    turnPlay,
    prevSong,
  }

  return (
    <PlayerContext.Provider value={playerContext}>
      {children}
      <audio
        ref={track}
        src={songs ? (songs[0] ? songs[index].src : '') : ''}
      />
    </PlayerContext.Provider>
  )
}
