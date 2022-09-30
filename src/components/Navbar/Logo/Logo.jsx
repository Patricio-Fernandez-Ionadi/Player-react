import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='navigation-left'>
      <h1 className='navigation-logo'>
        <Link className='navigation-logo-link' to='/'>
          MalaCara
        </Link>
      </h1>
    </div>
  )
}
