import { useSelector } from 'react-redux'

export const SongInfo = () => {
  const { currentSong } = useSelector(({ player }) => player)

  return (
    <marquee style={{ maxWidth: '740px' }} behavoir='slide'>
      {currentSong.name}
    </marquee>
  )
}
