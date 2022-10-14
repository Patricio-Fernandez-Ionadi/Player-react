import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPercentPlayed } from 'store'

// updates the percent played of the song with its current time of playing and the total time of the song

export const usePercentPlayed = () => {
  const dispatch = useDispatch()
  const { currentSong, isPlaying, html_audio } = useSelector(
    ({ player }) => player
  )

  const dispatchUpdatePercentPlayed = () => () => {
    if (html_audio && currentSong && isPlaying) {
      dispatch(setPercentPlayed(html_audio, currentSong))
    }
  }

  useEffect(() => {
    let oneSecInterval
    if (isPlaying) {
      oneSecInterval = setInterval(dispatchUpdatePercentPlayed(), 1000)
    }
    return () => clearInterval(oneSecInterval)
  }, [isPlaying])
}
