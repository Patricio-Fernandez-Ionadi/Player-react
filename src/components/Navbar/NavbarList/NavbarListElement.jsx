import { NavbarListElementLink } from './NavbarListElementLink'
import { NavbarListElementLinkIcon } from './NavbarListElementLinkIcon'

export const NavbarListElement = (props) => {
  return (
    <li className='navbar-list-element'>
      <NavbarListElementLink {...props} />
      <NavbarListElementLinkIcon {...props} />
    </li>
  )
}
