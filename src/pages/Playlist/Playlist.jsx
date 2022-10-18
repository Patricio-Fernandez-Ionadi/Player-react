import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Playlist = () => {
  const { playlists } = useSelector(({ playlist }) => playlist)

  if (!playlists[0]) {
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
        <h2>Playlist</h2>
        <ul>
          {playlists.map((e) => {
            return <li key={e.name}>{e.name}</li>
          })}
        </ul>
      </section>
    )
  }
}
