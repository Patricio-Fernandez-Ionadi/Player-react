import { useLocalStoragePlaylists } from 'hooks'

import { AddPlaylistButton, PageControls } from './components'
import { CurrentPlaylist } from './CurrentPlaylist'
import { AllPlaylists } from './AllPlaylists'
import { useThemeContext } from 'app/context'
import { PrevPageButton } from 'pages/components'

export const Playlist = () => {
  const playlists = useLocalStoragePlaylists()
  const { theme } = useThemeContext()

  if (!playlists[0]) {
    return (
      <section className={`view ${theme}`}>
        <h2>Crea tu primer lista de reproducción</h2>
        <AddPlaylistButton />
        <p>no hay listas de reproducción creadas, ¡haz la tuya!</p>
      </section>
    )
  } else {
    return (
      <section className={`view ${theme}`}>
        <PageControls>
          <PrevPageButton />
          <AddPlaylistButton />
        </PageControls>
        <CurrentPlaylist />
        <AllPlaylists />
      </section>
    )
  }
}
