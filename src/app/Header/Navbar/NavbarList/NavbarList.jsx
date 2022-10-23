import { useMenuMobileContext, useThemeContext } from 'app/context'
import { NavbarListElement } from './NavbarListElement'

export const NavbarList = () => {
  const { isOpen } = useMenuMobileContext()
  const { theme } = useThemeContext()

  const openMenuMobileClass = isOpen ? 'menu-open' : ''

  return (
    <ul className={`navbar-list-container ${openMenuMobileClass} ${theme}`}>
      {/* <NavbarListElement route='/lista' label='Lista' /> */}
      <NavbarListElement route='/playlist' label='Playlist' />
    </ul>
  )
}
