import { usePlayerContext } from 'Player/Context'
import { useEffect, useState } from 'react'

export const Statusbar = () => {
  // const handlePercentChange = (e) => {
  //   let inputValue = Number(e.target.value)

  //   if (inputValue === 100) {
  //     setTimeout(() => {
  //       if (isPlaying) {
  //         setCurrentTime(0)
  //         dispatch(nextSong())
  //         continuePlaying(html_audio)
  //       } else if (!isPlaying) {
  //         console.log('a la posima cancion cuando este en play')
  //       }
  //     }, 500)
  //   }

  //   setCurrentTime(inputValue)
  //   dispatch(setPercentPlayedExplicit(currentTime))

  //   html_audio.currentTime =
  //     Math.floor((currentSong.duration_sec / 100) * currentTime) || 0
  //   // console.log(html_audio)
  //   // regla de 3 para setear el porcentage entre 0 y 100 de reproduccion segun la duracion del tema actual

  //   // dispatch(setPercentPlayed(html_audio, currentSong))
  //   // console.log(Number(currentTime))
  //   // if (
  //   //   // isPlaying &&
  //   //   Number(currentTime) === 96 ||
  //   //   currentSong.percent_played === 100
  //   // ) {
  //   //   if (isPlaying) {
  //   //     console.log(currentSong)
  //   //     dispatch(nextSong())
  //   //     console.log(currentSong)
  //   //     setCurrentTime(0)
  //   //   }
  //   //   // console.log('no seguir')
  //   // } else {
  //   //   continuePlaying(html_audio)
  //   //   // console.log('else')
  //   // }
  // }

  const { player } = usePlayerContext()
  const { currentSong, html_audio, isPlaying } = player

  const [percentPlayed, setPercentPlayed] = useState(0)

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        let percent_played =
          (html_audio.currentTime * 100) / currentSong.duration_sec
        setPercentPlayed(Math.round(percent_played))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [html_audio.currentTime, percentPlayed, isPlaying])

  return (
    <input
      type='range'
      value={percentPlayed}
      readOnly
      alt='percent playing'
      aria-label='Transcurred time of the song'
    />
  )
}
