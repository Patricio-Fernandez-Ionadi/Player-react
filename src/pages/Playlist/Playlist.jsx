import { useLocalStoragePlaylists } from 'hooks'

import { AddPlaylistButton } from './components'
import { CurrentPlaylist } from './CurrentPlaylist'
import { AllPlaylists } from './AllPlaylists'

export const Playlist = () => {
  const playlists = useLocalStoragePlaylists()

  if (!playlists[0]) {
    return (
      <article>
        <h2>Crea tu primer lista de reproducción</h2>
        <AddPlaylistButton />
        <p>no hay listas de reproducción creadas, ¡haz la tuya!</p>
      </article>
    )
  } else {
    return (
      <article>
        <AddPlaylistButton />
        <h2>Listas creadas</h2>
        <CurrentPlaylist />
        <AllPlaylists />
      </article>
    )
  }
}
