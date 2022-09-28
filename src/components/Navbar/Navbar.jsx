import { Menu } from './Menu'
import { List } from './List'

export const Navbar = ({ isopen }) => {
  let openMenuClass = isopen ? ` menu-open` : ''

  return (
    <nav className={`navigation-container-app flex ${openMenuClass}`}>
      <Menu state={isopen} />
      <List />
    </nav>
  )
}
