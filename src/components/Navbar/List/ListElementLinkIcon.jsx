import { Link } from 'react-router-dom'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

export const ListElementLinkIcon = ({ route }) => {
  return (
    <Link className='navbar-list-icon non-mobile flex' type='button' to={route}>
      <QuestionMarkIcon />
    </Link>
  )
}
