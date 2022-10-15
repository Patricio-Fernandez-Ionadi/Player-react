import { Route, Routes } from 'react-router-dom'
// context
import { useMenuMobileContext } from 'context'
// components
import { Navbar } from 'components'
// styles
import '../theme/index.css'
import { Player } from 'Player'
import { SongsList } from 'pages'

export const App = () => {
  const { isOpen, turnMenu } = useMenuMobileContext()

  const handleAppClick = () => isOpen && turnMenu(false)

  return (
    <div className='main-container-app' onClick={handleAppClick}>
      <header className='header-container-app'>
        <Navbar />
      </header>

      <aside className='player-container-app'>
        <Player />
      </aside>
      <div className='body-container-app'>
        <Routes>
          {/* PRIVATE ROUTES */}
          <Route path='/' element={<h1>Inicio</h1>} />
          <Route path='/playlist' element={<h1>Playlist</h1>} />
          {/* PUBLIC ROUTES */}
          <Route path='/lista' element={<SongsList />} />
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path='/register' element={<h1>Register</h1>} />
        </Routes>
      </div>
    </div>
  )
}
