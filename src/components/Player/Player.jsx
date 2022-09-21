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

      {/* this may be a component apart later */}
      <div>
        <p>
          {currentSong.song} - <span>{currentSong.duration}</span>
        </p>
        {/* for now is a read only element but could have an onChange function that set the new point of playing of the current song */}
        <input type='range' value={percentSong} readOnly />
      </div>
    </div>
  )
}
