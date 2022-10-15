import { usePlayerContext } from 'Player/Context'
import { useEffect, useState } from 'react'
import { getPercent } from 'utils/helpers'

export const Statusbar = () => {
  const { player, nextSong } = usePlayerContext()
  const { currentSong, html_audio, isPlaying } = player

  const [percentPlayed, setPercentPlayed] = useState(0)

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        let percent_played = Math.round(
          (html_audio.currentTime * 100) / currentSong.duration_sec
        )
        setPercentPlayed(percent_played)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleChange = (e) => {
    let value = Number(e.target.value)
    setPercentPlayed(value)
    html_audio.currentTime = getPercent(value, currentSong.duration_sec)
  }

  if (html_audio.ended) nextSong()

  return (
    <input
      type='range'
      className='range-input'
      value={percentPlayed}
      onChange={handleChange}
      alt='percent playing'
      aria-label='Transcurred time of the song'
    />
  )
}
