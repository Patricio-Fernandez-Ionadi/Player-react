import { Link } from 'react-router-dom'
import { useThemeContext } from 'app/context'

export const NavbarListElementLinkIcon = ({ route, icon }) => {
  const { theme } = useThemeContext()
  return (
    <Link
      className={`non-mobile navbar-list-icon ${theme}`}
      type='button'
      to={route}
    >
      {icon}
    </Link>
  )
}
