import { Link } from 'react-router-dom'
import { AllPlaylists } from './AllPlaylists'
import { CurrentPlaylist } from './CurrentPlaylist'
import { useLocalStoragePlaylists } from './hooks/useLocalStoragePlaylists'

export const Playlist = () => {
  const playlists = useLocalStoragePlaylists()

  if (!playlists) {
    return (
      <section>
        <h2>Playlist</h2>
        <h3>Crea una lista de reproducción</h3>
        <button>
          <Link to='/lista'>crear nueva lista</Link>
        </button>
        <p>no hay playlist</p>
      </section>
    )
  } else {
    return (
      <section>
        <h3>Crear nueva lista</h3>
        <button>
          <Link to='/lista'>crear nueva lista</Link>
        </button>
        <CurrentPlaylist />
        <AllPlaylists />
      </section>
    )
  }
}
