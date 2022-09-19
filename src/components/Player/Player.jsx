import {
  ControlMute,
  ControlPlayPause,
  ControlPrev,
  ControlVolume,
} from './Controls'
import { ControlNext } from './Controls/ControlNext'

export const Player = () => {
  return (
    <div>
      <div>
        <ControlVolume />
      </div>
      <ControlMute />
      <ControlPrev />
      <ControlPlayPause />
      <ControlNext />
    </div>
  )
}
