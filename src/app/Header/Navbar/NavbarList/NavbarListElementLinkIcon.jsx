import { Link } from 'react-router-dom'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import { useThemeContext } from 'app/context'

export const NavbarListElementLinkIcon = ({ route, icon }) => {
  const { theme } = useThemeContext()
  return (
    <Link
      className={`navbar-list-icon non-mobile flex ${theme}`}
      type='button'
      to={route}
    >
      {icon}
    </Link>
  )
}
