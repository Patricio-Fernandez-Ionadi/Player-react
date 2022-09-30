import { useMenuMobileContext } from 'context'
import { ListElement } from '.'

export const List = () => {
  const { isOpen } = useMenuMobileContext()

  const openMenuMobileClass = isOpen ? 'menu-open' : ''

  return (
    <ul className={`navbar-list-container ${openMenuMobileClass}`}>
      {/* <ListElement route='/' label='Inicio' /> */}
      <ListElement route='/lista' label='Lista' />
      <ListElement route='/playlist' label='Playlist' />
      {/* <ListElement route='/login' label='Login' /> */}
    </ul>
  )
}
