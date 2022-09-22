import { usePlayerContext } from 'context'

export const ControlPlayPause = () => {
  const { playPause, isPlaying } = usePlayerContext()
  return <button onClick={playPause}>{isPlaying ? 'pause' : 'play'}</button>
}
