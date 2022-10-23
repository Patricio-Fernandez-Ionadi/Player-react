import { NavbarList } from './NavbarList'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { useThemeContext } from 'app/context/Theme'

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <nav className={`navigation-container ${theme}`}>
      <Logo />
      <button onClick={toggleTheme}>theme</button>
      <NavbarList />
      <Menu />
    </nav>
  )
}
