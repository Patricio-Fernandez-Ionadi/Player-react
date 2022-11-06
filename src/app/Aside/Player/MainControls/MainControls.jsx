import {
  ControlNext,
  ControlPlayPause,
  ControlPrev,
} from 'app/Aside/Player/Controls'

export const MainControls = ({ next, prev }) => {
  return (
    <div className='comands-container flex'>
      <ControlPrev prev={prev} />
      <ControlPlayPause />
      <ControlNext next={next} />
    </div>
  )
}
