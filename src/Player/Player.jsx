import { ControlPlayPause, ControlPrev, ControlNext } from './Controls'
import { SongInfo, Statusbar } from './Statusbar'

export const Player = () => {
  return (
    <div className='player-container flex-col'>
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
