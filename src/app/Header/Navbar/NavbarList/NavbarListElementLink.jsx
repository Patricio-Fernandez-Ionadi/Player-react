import { Link } from 'react-router-dom'

export const NavbarListElementLink = ({ route, label }) => {
  return (
    <Link className='navbar-list-link' to={route}>
      {label}
    </Link>
  )
}
