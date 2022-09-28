import { Link } from 'react-router-dom'
import { Menu } from './Menu'

export const Navbar = ({ isopen }) => {
  return (
    <nav
      className={
        isopen
          ? `navigation-container-app menu-open`
          : 'navigation-container-app'
      }
    >
      <Menu state={isopen} />

      <ul className='navbar-list-container'>
        <li className='navbar-list-element'>
          <Link className='navbar-list-link' to={'/'}>
            Inicio
          </Link>
          <div className='non-mobile'>
            <button type='button'>iconito</button>
          </div>
        </li>
        <li className='navbar-list-element'>
          <Link className='navbar-list-link' to={'/lista'}>
            Lista
          </Link>
          <div className='non-mobile'>
            <button type='button'>iconito</button>
          </div>
        </li>
        <li className='navbar-list-element'>
          <Link className='navbar-list-link' to={'/playlist'}>
            Playlist
          </Link>
          <div className='non-mobile'>
            <button type='button'>iconito</button>
          </div>
        </li>
        <li className='navbar-list-element'>
          <Link className='navbar-list-link' to={'/login'}>
            Login
          </Link>
          <div className='non-mobile'>
            <button type='button'>iconito</button>
          </div>
        </li>
      </ul>
    </nav>
  )
}
