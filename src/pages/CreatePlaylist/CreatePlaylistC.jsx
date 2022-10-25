import { useThemeContext } from 'app/context'
import { Loading } from 'components'
import { useCreatePlaylist } from './Context'
import { NameInput } from './Name'
import { Table } from './Table'

export const CreatePlaylistC = () => {
  const { songs } = useCreatePlaylist()

  const { theme } = useThemeContext()

  return (
    <article>
      <h2>Crea tu playlist</h2>
      {songs ? (
        <div className={`paper ${theme}`}>
          <NameInput />
          <Table />
        </div>
      ) : (
        <Loading />
      )}
    </article>
  )
}
