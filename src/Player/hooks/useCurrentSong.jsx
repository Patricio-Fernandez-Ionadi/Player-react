import { useEffect, useState } from 'react'
import { getTrackDuration } from 'utils/helpers'

export const useCurrentSong = (player) => {
  const [songToPlay, setSongToPlay] = useState()
  const [songToPlayIndex, setSongToPlayIndex] = useState(0)
  const [load, setLoad] = useState(false)

  const { html_audio: audio, songs } = player

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

  const nextIndex = () => {
    setLoad(false)
    if (songToPlayIndex + 1 === songs.length) {
      if (player.repeatAll) {
        setSongToPlayIndex(0)
      }
      return
    } else {
      setSongToPlayIndex((prev) => prev + 1)
    }
  }

  const prevIndex = () => {
    setLoad(false)
    if (songToPlayIndex - 1 <= 0) {
      if (player.repeatAll) {
        setSongToPlayIndex(songs.length - 1)
      }
      return
    } else {
      setSongToPlayIndex((prev) => prev - 1)
    }
  }

  return {
    load,
    current: songToPlay,
    nextIndex,
    prevIndex,
    index: songToPlayIndex,
  }
}
