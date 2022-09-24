import {
  ControlPlayPause,
  ControlPrev,
  ControlNext,
  ControlRepeat,
  ControlVolume,
  ControlMute,
} from './Controls'
import { SongInfo, Statusbar } from './Statusbar'

import './style/index.css'

export const Player = () => {
  return (
    <div className='player'>
      <div className='volume-control-container'>
        <div className='volume-control-box'>
          <ControlMute />
          <ControlVolume />
        </div>
      </div>

      <div className='comands-control-container'>
        <div className='status-box'>
          <SongInfo />
          <Statusbar />
        </div>

        <div className='controls-box'>
          <ControlRepeat />
          <ControlPrev />
          <ControlPlayPause />
          <ControlNext />
        </div>
      </div>
    </div>
  )
}
