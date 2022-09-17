import { usePlayerContext } from '../../../context'

export const Player = () => {
  const { playPause, isPlaying } = usePlayerContext()

  return (
    <div>
      <button onClick={playPause}>{isPlaying ? 'pause' : 'play'}</button>
    </div>
  )
}
