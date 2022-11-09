import { useCreatePlaylist } from './Context'
import { Loading, Paper, View } from 'components'

import { PrevPageButton, PageControls } from 'pages/components'

import { NameInput } from './Name'
import { Table } from './Table'

export const CreatePlaylistC = () => {
  const { songs } = useCreatePlaylist()

  return (
    <View>
      <PageControls>
        <PrevPageButton />
      </PageControls>
      <h2>Crea tu playlist</h2>
      {songs ? (
        <Paper elevation={6}>
          <NameInput />
          <Table />
        </Paper>
      ) : (
        <Loading />
      )}
    </View>
  )
}
