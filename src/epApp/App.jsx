import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// context
import { PlayerContextProvider } from 'context'
import { useMenuMobileContext } from 'context'
import { initPlayerState } from 'store'
// components
import { Navbar } from 'components'
import { Player } from 'Player'
import { Lorem800 } from 'components/Lorem800' // random component to create scroll (Temporary)
// styles
import '../theme/index.css'

export const App = () => {
  const { isOpen, turnMenu } = useMenuMobileContext()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initPlayerState())
  }, [dispatch])

  const handleAppClick = () => isOpen && turnMenu(false)

  return (
    <div className='main-container-app' onClick={handleAppClick}>
      <header className='header-container-app'>
        <Navbar />
      </header>

      <aside className='player-container-app'>
        <PlayerContextProvider>
          <Player />
        </PlayerContextProvider>
      </aside>
      <div className='body-container-app'>
        <Routes>
          {/* PRIVATE ROUTES */}
          <Route path='/' element={<h1>Inicio</h1>} />
          <Route path='/playlist' element={<h1>Playlist</h1>} />
          {/* PUBLIC ROUTES */}
          <Route path='/lista' element={<Lorem800 />} />
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path='/register' element={<h1>Register</h1>} />
        </Routes>
      </div>
    </div>
  )
}
