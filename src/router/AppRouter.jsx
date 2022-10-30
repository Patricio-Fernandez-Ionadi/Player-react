import { Route, Routes } from 'react-router-dom'
import { About, CreatePlaylist, Inicio, Playlist, PlaylistDetail } from 'pages'
import { routes } from 'utils'
// import { PlaylistRoute } from './Playlist/PlaylistRoute'

export const AppRouter = () => {
  return (
    <Routes>
      {/* PRIVATE ROUTES */}
      <Route path={routes.home.route} element={<Inicio />} />
      {/* Playlists */}
      <Route path={routes.playlist.route} element={<Playlist />} />
      <Route
        path={`${routes.playlist.route}/detail/:playlistname`}
        element={<PlaylistDetail />}
      />
      {/* Create Playlist */}
      <Route path='/lista' element={<CreatePlaylist />} />
      {/* PUBLIC ROUTES */}
      <Route path={routes.about.route} element={<About />} />
      <Route path='/login' element={<h1>Login</h1>} />
      <Route path='/register' element={<h1>Register</h1>} />
      <Route path='/*' element={<h1>ruta no encontrada</h1>} />
    </Routes>
  )
}
