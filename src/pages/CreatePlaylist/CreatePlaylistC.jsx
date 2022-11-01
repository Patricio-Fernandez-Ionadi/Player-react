import { useThemeContext } from 'app/context'
import { Loading, Paper } from 'components'
import { useCreatePlaylist } from './Context'
import { NameInput } from './Name'
import { Table } from './Table'

export const CreatePlaylistC = () => {
  const { songs } = useCreatePlaylist()
  const { theme } = useThemeContext()

  return (
    <section className={`view ${theme}`}>
      <h2>Crea tu playlist</h2>
      {songs ? (
        <Paper elevation={6}>
          <NameInput />
          <Table />
        </Paper>
      ) : (
        <Loading />
      )}
    </section>
  )
}
