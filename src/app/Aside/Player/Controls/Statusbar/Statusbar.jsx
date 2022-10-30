import { usePlayerContext } from 'app/Aside/Player/Context'
import { useEffect, useState } from 'react'
import { getPercent } from 'utils/helpers'

export const Statusbar = () => {
  const { player, nextSong } = usePlayerContext()
  const { currentSong, audio, isPlaying } = player

  const [percentPlayed, setPercentPlayed] = useState(0)

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        let percent_played = Math.round(
          (audio.currentTime * 100) / currentSong.duration_sec
        )
        setPercentPlayed(percent_played)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleChange = (e) => {
    let value = Number(e.target.value)
    setPercentPlayed(value)
    audio.currentTime = getPercent(value, currentSong.duration_sec)
  }

  if (audio.ended) nextSong()

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
