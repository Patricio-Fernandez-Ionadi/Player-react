import {
  ControlMute,
  ControlPlayPause,
  ControlPrev,
  ControlVolume,
} from './Controls'

export const Player = () => {
  return (
    <div>
      <div>
        <ControlVolume />
      </div>
      <ControlMute />
      <ControlPrev />
      <ControlPlayPause />
    </div>
  )
}
