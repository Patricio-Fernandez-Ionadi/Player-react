import { SongInfo } from './SongInfo'
import { Statusbar } from './Statusbar'

export const Info = () => {
  return (
    <div className='info-container flex-col'>
      <SongInfo />
      <Statusbar />
    </div>
  )
}
