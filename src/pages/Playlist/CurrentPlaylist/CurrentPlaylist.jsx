import { useThemeContext } from 'app/context'
import { Paper } from 'components'
import { useSelector } from 'react-redux'

export const CurrentPlaylist = () => {
  const { theme } = useThemeContext()
  const { playlist } = useSelector(({ player }) => player)

  if (!playlist.songs[0]) {
    return <span />
  }

  return (
    <Paper elevation={4}>
      <h3>{playlist.name}</h3>
      <ul className={`current-playlist-list ${theme}`}>
        {playlist.songs.map((e, i) => {
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
