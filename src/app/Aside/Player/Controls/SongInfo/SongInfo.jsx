import { usePlayerContext } from 'app/Aside/Player/Context'
// import { useSelector } from 'react-redux'

export const SongInfo = () => {
  // const { currentSong } = useSelector(({ player }) => player)
  const { player } = usePlayerContext()

  const { currentSong } = player

  return (
    <marquee style={{ maxWidth: '740px' }} behavoir='slide'>
      {currentSong.name}
    </marquee>
  )
}
