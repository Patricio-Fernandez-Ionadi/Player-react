import { usePlayerContext } from 'context'

export const SongInfo = () => {
  const { currentSong } = usePlayerContext()

  return (
    <p>
      {currentSong.song} - <span>{currentSong.duration}</span>
    </p>
  )
}
