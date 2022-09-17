import { ControlVolume } from '.'
import { usePlayerContext } from '../../../context'
// import './volume.css'

export const Player = () => {
  const { playPause, isPlaying } = usePlayerContext()

  return (
    <div>
      <ControlVolume />
      <button onClick={playPause}>{isPlaying ? 'pause' : 'play'}</button>
    </div>
  )
}
