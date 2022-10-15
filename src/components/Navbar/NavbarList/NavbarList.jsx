import { useMenuMobileContext } from 'context'
import { NavbarListElement } from '.'

export const NavbarList = () => {
  const { isOpen } = useMenuMobileContext()

  const openMenuMobileClass = isOpen ? 'menu-open' : ''

  return (
    <ul className={`navbar-list-container ${openMenuMobileClass}`}>
      <NavbarListElement route='/lista' label='Lista' />
      <NavbarListElement route='/playlist' label='Playlist' />
    </ul>
  )
}
