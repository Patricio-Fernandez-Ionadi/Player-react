import { Link } from 'react-router-dom'
import './style/index.css'

export const Navbar = () => {
  return (
    <ul className='navbar-list-container'>
      <li className='navbar-list-element'>
        <Link className='navbar-list-link' to={'/'}>
          Inicio
        </Link>
      </li>
      <li className='navbar-list-element'>
        <Link className='navbar-list-link' to={'/lista'}>
          Lista
        </Link>
      </li>
      <li className='navbar-list-element'>
        <Link className='navbar-list-link' to={'/playlist'}>
          Playlist
        </Link>
      </li>
      <li className='navbar-list-element'>
        <Link className='navbar-list-link' to={'/login'}>
          Login
        </Link>
      </li>
    </ul>
  )
}
