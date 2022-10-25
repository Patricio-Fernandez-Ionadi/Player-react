import { useEffect, useState } from 'react'
import { getTrackDuration } from 'utils/helpers'

export const useCurrentSong = (player) => {
  const [songToPlay, setSongToPlay] = useState()
  const [songToPlayIndex, setSongToPlayIndex] = useState(0)
  const [load, setLoad] = useState(false)

  const { audio, songs, repeatAll } = player

  const setSong = () => {
    setSongToPlay({
      index: songToPlayIndex,
      listPosition: songToPlayIndex + 1,
      duration: getTrackDuration(audio).timer,
      duration_sec: getTrackDuration(audio).secs,
      percent_played: (audio.currentTime * 100) / getTrackDuration(audio).secs,
      src: songs[songToPlayIndex].src,
      name: songs[songToPlayIndex].name,
    })
  }

  useEffect(() => {
    if (player && audio && songs && songs[songToPlayIndex]) {
      audio.addEventListener('loadedmetadata', () => {
        setLoad(true)
        setSong()
      })
    }
  }, [player, audio, songToPlayIndex])

  const lastSongIndex = songs.length - 1
  const isLastSong = songToPlayIndex + 1 === songs.length
  const isFirstSong = songToPlayIndex - 1 < 0

  const nextIndex = (shuffle) => {
    setLoad(false)

    if (shuffle) {
      setSongToPlayIndex(Math.floor(Math.random() * songs.length))
      return
    }

    if (isLastSong) {
      if (repeatAll) {
        setSongToPlayIndex(0)
      }
      return
    } else {
      setSongToPlayIndex((prev) => prev + 1)
    }
  }

  const prevIndex = () => {
    setLoad(false)
    if (isFirstSong) {
      if (repeatAll) {
        setSongToPlayIndex(lastSongIndex)
      }
      return
    } else {
      setSongToPlayIndex((prev) => prev - 1)
    }
  }

  const setLoadFalse = () => {
    setLoad(false)
  }

  return {
    load,
    song: songToPlay,
    index: songToPlayIndex,
    setLoadFalse,
    nextIndex,
    prevIndex,
  }
}
