import { useThemeContext } from 'app/context'
import { useSelector } from 'react-redux'

export const CurrentPlaylist = () => {
  const { theme } = useThemeContext()
  const { currentPlaylist } = useSelector(({ playlist }) => playlist)

  if (!currentPlaylist.songs[0]) {
    return <span />
  }

  return (
    <div className='current-playlist-container'>
      <h3>{currentPlaylist.name}</h3>
      <ul className={`current-playlist-list paper ${theme}`}>
        {currentPlaylist.songs.map((e, i) => {
          return (
            <li key={e.name}>
              {++i} - {e.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
