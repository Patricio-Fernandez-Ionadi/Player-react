import {
  ControlNext,
  ControlPlayPause,
  ControlPrev,
} from 'app/Aside/Player/Controls'

export const MainControls = ({ next, prev }) => {
  return (
    <div className='comands-container'>
      <ControlPrev prev={prev} />
      <ControlPlayPause />
      <ControlNext next={next} />
    </div>
  )
}
