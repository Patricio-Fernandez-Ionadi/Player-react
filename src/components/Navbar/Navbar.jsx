import { Menu } from './Menu'
import { List } from './List'

export const Navbar = ({ isopen }) => {
  return (
    <nav
      className={
        isopen
          ? `navigation-container-app menu-open`
          : 'navigation-container-app'
      }
    >
      <Menu state={isopen} />
      <List />
    </nav>
  )
}
