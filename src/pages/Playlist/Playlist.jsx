import { useLocalStoragePlaylists } from 'hooks'

import { CurrentPlaylist } from './CurrentPlaylist'
import { AllPlaylists } from './AllPlaylists'
import { CreatePlaylistButton, PageControls } from 'pages/components'
import { View } from 'components'

export const Playlist = () => {
  const playlists = useLocalStoragePlaylists()

  if (!playlists[0]) {
    return (
      <View>
        <h2>Crea tu primer lista de reproducción</h2>
        <CreatePlaylistButton />
        <p>no hay listas de reproducción creadas, ¡haz la tuya!</p>
      </View>
    )
  } else {
    return (
      <View>
        <PageControls>
          <CreatePlaylistButton />
        </PageControls>
        <CurrentPlaylist />
        <AllPlaylists />
      </View>
    )
  }
}
