import { useMenuMobileContext } from 'app/context'
import { NavbarListElement } from './NavbarListElement'

export const NavbarList = () => {
  const { isOpen } = useMenuMobileContext()

  const openMenuMobileClass = isOpen ? 'menu-open' : ''

  return (
    <ul className={`navbar-list-container ${openMenuMobileClass}`}>
      {/* <NavbarListElement route='/lista' label='Lista' /> */}
      <NavbarListElement route='/playlist' label='Playlist' />
    </ul>
  )
}
