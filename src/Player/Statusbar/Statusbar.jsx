import { useSelector } from 'react-redux'
import { usePercentPlayed } from 'hooks/usePercentPlayed'

export const Statusbar = () => {
  const { currentSong } = useSelector(({ player }) => player)
  usePercentPlayed() // updates the current percent played of the song

  return (
    //  at the moment it is a read only element but could have an onChange function that set the new point of playing of the current song
    <input
      type='range'
      value={currentSong.percent_played || 0}
      readOnly
      alt='percent playing'
      aria-label='Transcurred time of the song'
    />
  )
}
