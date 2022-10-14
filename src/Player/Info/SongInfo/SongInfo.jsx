import { usePlayerContext } from 'Player/Context'
// import { useSelector } from 'react-redux'

export const SongInfo = () => {
  // const { currentSong } = useSelector(({ player }) => player)
  const { player } = usePlayerContext()

  const { currentSong } = player

  return <marquee behavoir='slide'>{currentSong.name}</marquee>
}
