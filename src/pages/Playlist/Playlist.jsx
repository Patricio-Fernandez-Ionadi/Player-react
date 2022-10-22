import { useLocalStoragePlaylists } from './hooks/useLocalStoragePlaylists'

import { AddPlaylistButton } from './components'
import { CurrentPlaylist } from './CurrentPlaylist'
import { AllPlaylists } from './AllPlaylists'

export const Playlist = () => {
  const playlists = useLocalStoragePlaylists()

  if (!playlists) {
    return (
      <section>
        <h2>Playlist</h2>
        <h3>Crea una lista de reproducción</h3>
        <AddPlaylistButton />
        <p>no hay playlist</p>
      </section>
    )
  } else {
    return (
      <section>
        <AddPlaylistButton />
        <h2>Playlists</h2>
        <CurrentPlaylist />
        <AllPlaylists />
      </section>
    )
  }
}
