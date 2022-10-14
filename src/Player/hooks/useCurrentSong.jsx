import { useEffect, useState } from 'react'
import { getTrackDuration } from 'utils/helpers'

export const useCurrentSong = (player) => {
  const [songToPlay, setSongToPlay] = useState()
  const [songToPlayIndex, setSongToPlayIndex] = useState(0)

  const setSong = () => {
    setSongToPlay({
      index: songToPlayIndex,
      listPosition: songToPlayIndex + 1,
      duration: getTrackDuration(player.html_audio).timer,
      duration_sec: getTrackDuration(player.html_audio).secs,
      percent_played:
        (player.html_audio.currentTime * 100) /
        getTrackDuration(player.html_audio).secs,
      src: player.songs[songToPlayIndex].src,
      name: player.songs[songToPlayIndex].name,
    })
  }

  useEffect(() => {
    if (
      player &&
      player?.html_audio &&
      player?.songs &&
      player?.songs[songToPlayIndex]
    ) {
      player.html_audio.addEventListener('loadedmetadata', (e) => {
        setSong()
      })
    }
  }, [
    player,
    player.html_audio,
    // player.songs[0],
    player.html_audio.src,
    songToPlayIndex,
  ])

  const nextIndex = () => {
    setSongToPlayIndex((prev) => prev + 1)
  }

  return {
    load: songToPlay ? true : false,
    current: songToPlay,
    nextIndex,
    index: songToPlayIndex,
  }
}
