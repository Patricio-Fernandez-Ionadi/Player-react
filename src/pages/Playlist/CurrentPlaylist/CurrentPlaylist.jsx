import { useThemeContext } from 'app/context'
import { Paper } from 'components'
import { useSelector } from 'react-redux'

export const CurrentPlaylist = () => {
  const { theme } = useThemeContext()
  const { currentPlaylist } = useSelector(({ playlist }) => playlist)

  if (!currentPlaylist.songs[0]) {
    return <span />
  }

  return (
    <Paper elevation={4}>
      <h3>{currentPlaylist.name}</h3>
      <ul className={`current-playlist-list ${theme}`}>
        {currentPlaylist.songs.map((e, i) => {
          return (
            <li key={e.name}>
              {++i} - {e.name}
            </li>
          )
        })}
      </ul>
    </Paper>
  )
}
