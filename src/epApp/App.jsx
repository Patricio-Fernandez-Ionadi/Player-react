import { Route, Routes } from 'react-router-dom'

import './style/index.css'

import { PlayerContextProvider } from 'context'
import { Navbar } from '../components'
import { Player } from 'Player'

export const App = () => {
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
            <Route path='/albums' element={<h1>Biblioteca</h1>} />
            {/* PUBLIC ROUTES */}
            <Route path='/login' element={<h1>Login</h1>} />
            <Route path='/register' element={<h1>Register</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}
