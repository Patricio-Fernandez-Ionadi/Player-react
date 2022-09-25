import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// context
import { PlayerContextProvider } from 'context'
import { initSongs } from 'store'
// components
import { Navbar } from 'components'
import { Player } from 'Player'
// styles
import './style/index.css'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSongs())
  }, [dispatch])

  return (
    <>
      <div className='main-container-app'>
        <nav className='navigation-container-app'>
          <Navbar />
        </nav>

        <div className='content-container-app'>
          <PlayerContextProvider>
            <Player />
          </PlayerContextProvider>
          <Routes>
            {/* PRIVATE ROUTES */}
            <Route path='/' element={<h1>Inicio</h1>} />
            <Route path='/playlist' element={<h1>Playlist</h1>} />
            {/* PUBLIC ROUTES */}
            <Route path='/lista' element={<h1>Lista</h1>} />
            <Route path='/login' element={<h1>Login</h1>} />
            <Route path='/register' element={<h1>Register</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}
