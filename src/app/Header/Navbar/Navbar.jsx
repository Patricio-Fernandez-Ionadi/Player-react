import { useThemeContext } from 'app/context/Theme'

import { Logo } from './Logo'
import { ToggleTheme } from 'components'
import { NavbarList } from './NavbarList'
import { Menu } from './Menu'

export const Navbar = () => {
  const { theme } = useThemeContext()

  return (
    <nav className={`navigation-container ${theme}`}>
      <Logo />
      <ToggleTheme />
      <NavbarList />
      <Menu />
    </nav>
  )
}
