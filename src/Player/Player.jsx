import {
  ControlPlayPause,
  ControlPrev,
  ControlNext,
  ControlRepeat,
  Volume,
} from './Controls'
import { SongInfo, Statusbar } from './Statusbar'

import './style/index.css'

export const Player = () => {
  return (
    <div className='player'>
      <Volume />
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
