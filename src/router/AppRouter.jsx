import { Route, Routes } from 'react-router-dom'
import { About, CreatePlaylist, Inicio, Playlist } from 'pages'
import { routes } from 'utils'

export const AppRouter = () => {
  return (
    <Routes>
      {/* PRIVATE ROUTES */}
      <Route path={routes.home.route} element={<Inicio />} />
      <Route path={routes.playlist.route} element={<Playlist />} />
      <Route path='/lista' element={<CreatePlaylist />} />
      {/* PUBLIC ROUTES */}
      <Route path={routes.about.route} element={<About />} />
      <Route path='/login' element={<h1>Login</h1>} />
      <Route path='/register' element={<h1>Register</h1>} />
    </Routes>
  )
}
