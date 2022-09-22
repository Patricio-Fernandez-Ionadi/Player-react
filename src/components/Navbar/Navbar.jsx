import { Link } from 'react-router-dom'
// import { Menu } from './Menu'
export const Navbar = () => {
  return (
    <div>
      {/* <Menu /> */}
      <div>
        <Link to={'/'}>Inicio</Link>
      </div>
      <div>
        <Link to={'/albums'}>Biblioteca</Link>
      </div>
    </div>
  )
}
