import { Link } from 'react-router-dom'
import './style/index.css'

export const Navbar = () => {
  return (
    <ul className='navbar-list-container'>
      <li className='navbar-list-element'>
        <Link to={'/'}>Inicio</Link>
      </li>
      <li className='navbar-list-element'>
        <Link to={'/lista'}>Lista</Link>
      </li>
      <li className='navbar-list-element'>
        <Link to={'/playlist'}>Playlist</Link>
      </li>
      <li className='navbar-list-element'>
        <Link to={'/login'}>Login</Link>
      </li>
    </ul>
  )
}
