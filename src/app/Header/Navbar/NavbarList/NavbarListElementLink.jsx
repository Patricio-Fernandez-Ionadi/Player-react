import { useThemeContext } from 'app/context'
import { Link } from 'react-router-dom'

export const NavbarListElementLink = ({ route, label }) => {
  const { theme } = useThemeContext()

  return (
    <Link className={`navbar-list-link ${theme}`} to={route}>
      {label}
    </Link>
  )
}
