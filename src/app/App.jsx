import { useMenuMobileContext } from 'app/context'

import { Header } from './Header'
import { Player } from 'Player'
import { Content } from './Content'
import { AppRouter } from 'router'

export const App = () => {
  const { isOpen, turnMenu } = useMenuMobileContext()
  const closeMenu = () => isOpen && turnMenu(false)
  return (
    <div className='main-container-app' onClick={closeMenu}>
      <Header />
      <Player />
      <Content>
        <AppRouter />
      </Content>
    </div>
  )
}
