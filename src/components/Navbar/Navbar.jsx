import { List } from './List'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Navbar = () => {
  return (
    <nav className={`navigation-container`}>
      <Logo />
      <List />
      <Menu />
    </nav>
  )
}
