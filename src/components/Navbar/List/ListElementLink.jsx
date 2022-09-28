import { Link } from 'react-router-dom'

export const ListElementLink = ({ route, label }) => {
  return (
    <Link className='navbar-list-link' to={route}>
      {label}
    </Link>
  )
}
