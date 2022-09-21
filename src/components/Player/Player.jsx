import { usePlayerContext } from 'context'
import {
  ControlMute,
  ControlPlayPause,
  ControlPrev,
  ControlVolume,
  ControlNext,
} from './Controls'

export const Player = () => {
  const { currentSong, percentSong } = usePlayerContext()

  return (
    <div>
      <div>
        <ControlVolume />
      </div>
      <div>
        <ControlMute />
        <ControlPrev />
        <ControlPlayPause />
        <ControlNext />
      </div>
      <div>
        <p>
          {currentSong.song} - <span>{currentSong.duration}</span>
        </p>
        <input type='range' name='' id='' value={percentSong} readOnly />
      </div>
    </div>
  )
}
