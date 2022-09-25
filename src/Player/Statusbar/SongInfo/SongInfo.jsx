import { useSelector } from 'react-redux'

export const SongInfo = () => {
  const { currentSong } = useSelector(({ player }) => player)

  return (
    <p>
      {currentSong.name} - <span>{currentSong.duration}</span>
    </p>
  )
}
