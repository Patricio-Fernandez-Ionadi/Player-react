import { useThemeContext } from 'app/context'
import { useNavigate } from 'react-router-dom'
import { showTopPage } from 'utils'

import { PlaylistCardDetail } from './PlaylistCardDetail'
import { PlaylistCardHeader } from './PlaylistCardHeader'

export const PlaylistCard = ({ pl }) => {
  const { theme } = useThemeContext()

  const navigate = useNavigate()

  const handleSelectPlaylist = () => {
    showTopPage()
    navigate(`./detail/${pl.name}`)
  }

  let expired = null
  const doubleTouch = (e) => {
    if (e.touches.length === 1) {
      if (!expired) {
        expired = e.timeStamp + 400
      } else if (e.timeStamp <= expired) {
        // execute double touch event
        handleSelectPlaylist()
        // then reset the variable for other "double Touches" event
        expired = null
      } else {
        // if the second touch was expired, make it as it's the first
        expired = e.timeStamp + 400
      }
    }
  }

  return (
    <div
      className={`playlist-card ${theme}`}
      onTouchStart={doubleTouch}
      onDoubleClick={handleSelectPlaylist}
    >
      <PlaylistCardHeader name={pl.name} />
      <PlaylistCardDetail playlist={pl} />
    </div>
  )
}
