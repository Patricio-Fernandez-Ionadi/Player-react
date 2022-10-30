import {
  ControlNext,
  ControlPlayPause,
  ControlPrev,
} from 'app/Aside/Player/Controls'

export const MainControls = () => {
  return (
    <div className='comands-container flex'>
      <ControlPrev />
      <ControlPlayPause />
      <ControlNext />
    </div>
  )
}
