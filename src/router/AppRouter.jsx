import { Route, Routes } from 'react-router-dom'
import { CreatePlaylist, Playlist } from 'pages'

export const AppRouter = () => {
  return (
    <Routes>
      {/* PRIVATE ROUTES */}
      <Route path='/' element={<h1>Inicio</h1>} />
      <Route path='/playlist' element={<Playlist />} />
      <Route path='/lista' element={<CreatePlaylist />} />
      {/* PUBLIC ROUTES */}
      <Route path='/login' element={<h1>Login</h1>} />
      <Route path='/register' element={<h1>Register</h1>} />
    </Routes>
  )
}
