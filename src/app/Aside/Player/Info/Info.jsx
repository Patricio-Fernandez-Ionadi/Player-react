import { SongInfo } from '../Controls/SongInfo'
import { Statusbar } from '../Controls/Statusbar'

export const Info = () => {
  return (
    <div className='info-container fc aic'>
      <SongInfo />
      <Statusbar />
    </div>
  )
}
