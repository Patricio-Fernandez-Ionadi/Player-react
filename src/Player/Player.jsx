import {
  ControlPlayPause,
  ControlPrev,
  ControlNext,
  ControlRepeat,
  Volume,
} from './Controls'
import { SongInfo, Statusbar } from './Statusbar'

export const Player = () => {
  return (
    <div className='player-container flex-col'>
      {/* <Volume /> */}
      {/* <ControlRepeat /> */}
      <div className='comands-container flex'>
        <ControlPrev />
        <ControlPlayPause />
        <ControlNext />
      </div>
      <div className='info-container flex-col'>
        <SongInfo />
        <Statusbar />
      </div>
    </div>
  )
}
