import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// context
import { PlayerContextProvider } from 'context'
import { initSongs } from 'store'
// components
import { Navbar } from 'components'
import { Player } from 'Player'
// styles
import '../theme/index.css'

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSongs())
  }, [dispatch])

  const handleAppClick = (e) => {
    if (window.innerWidth > 739) {
      if (!isOpen && e.clientX < 60 && e.clientY < 50) {
        setIsOpen(true)
      } else if (isOpen) {
        setIsOpen(false)
      }
    }
  }

  return (
    <div className='main-container-app' onClick={handleAppClick}>
      <Navbar isopen={isOpen} />

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
  )
}
