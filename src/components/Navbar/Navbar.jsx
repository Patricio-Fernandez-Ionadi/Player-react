import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div>
        <Link to={'/'}>Inicio</Link>
      </div>
      <div>
        <Link to={'/albums'}>Biblioteca</Link>
      </div>
    </>
  )
}
