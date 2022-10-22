import { Link } from 'react-router-dom'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'

export const NavbarListElementLinkIcon = ({ route }) => {
  return (
    <Link className='navbar-list-icon non-mobile flex' type='button' to={route}>
      <QueueMusicIcon />
    </Link>
  )
}
