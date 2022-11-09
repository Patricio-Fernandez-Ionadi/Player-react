import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { getPercent } from 'utils/helpers'

export const Statusbar = () => {
  const player = useSelector(({ player }) => player)

  const { audio, isPlaying } = player

  const [percentPlayed, setPercentPlayed] = useState(0)

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        let percent_played = Math.round(
          (audio.currentTime * 100) / audio.duration
        )
        setPercentPlayed(percent_played)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleChange = (e) => {
    let value = Number(e.target.value)
    audio.currentTime = Math.floor(
      getPercent(value, Math.round(audio.duration))
    )
  }

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
