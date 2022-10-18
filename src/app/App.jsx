import { useMenuMobileContext } from 'context'

import { Navbar } from 'components'
import { Player } from 'Player'
import { AppRouter } from 'router'

export const App = () => {
  const { isOpen, turnMenu } = useMenuMobileContext()
  const closeMenu = () => isOpen && turnMenu(false)

  return (
    <div className='main-container-app' onClick={closeMenu}>
      <header className='header-container-app'>
        <Navbar />
      </header>
      <Player />
      <div className='body-container-app'>
        <AppRouter />
      </div>
    </div>
  )
}
