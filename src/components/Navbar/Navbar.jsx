import { NavbarList } from './NavbarList'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Navbar = () => {
  return (
    <nav className={`navigation-container`}>
      <Logo />
      <NavbarList />
      <Menu />
    </nav>
  )
}
