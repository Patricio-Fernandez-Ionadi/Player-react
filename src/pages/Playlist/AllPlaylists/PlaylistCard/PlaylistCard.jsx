import { useThemeContext } from 'app/context'
import { useDispatch } from 'react-redux'
import { setCurrentPlaylist } from 'store'
import { PlaylistCardDetail } from './PlaylistCardDetail'
import { PlaylistCardHeader } from './PlaylistCardHeader'

export const PlaylistCard = ({ pl }) => {
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const handleSelectPlaylist = () => {
    dispatch(setCurrentPlaylist(pl))
  }

  /*   
  let expired
  let doubleTouch = (e) => {
    if (e.touches.length === 1) {
      if (!expired) {
        expired = e.timeStamp + 400
      } else if (e.timeStamp <= expired) {
        // remove the default of this event ( Zoom )
        handleSelectPlaylist()
        // then reset the variable for other "double Touches" event
        expired = null
      } else {
        // if the second touch was expired, make it as it's the first
        expired = e.timeStamp + 400
      }
    }
  } 
  */

  return (
    <div
      className={`playlist-card ${theme}`}
      onClick={handleSelectPlaylist}
      // onTouchStart={doubleTouch}
    >
      <PlaylistCardHeader name={pl.name} />
      <PlaylistCardDetail playlist={pl} />
    </div>
  )
}
