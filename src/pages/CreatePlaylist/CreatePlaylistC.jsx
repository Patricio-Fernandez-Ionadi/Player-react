import { Loading } from 'components'
import { useCreatePlaylist } from './Context'
import { NameInput } from './Name'
import { Table } from './Table'

export const CreatePlaylistC = () => {
  const { songs } = useCreatePlaylist()
  return (
    <>
      <h2>Crea tu playlist</h2>
      {songs ? (
        <div className='new-playlist-form'>
          <NameInput />
          <Table />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
