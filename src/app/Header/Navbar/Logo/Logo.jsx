import { Link } from 'react-router-dom'

import { useThemeContext } from 'app/context/Theme'

export const Logo = () => {
  const { theme } = useThemeContext()
  return (
    <div className='navigation-left'>
      <h1 className='navigation-logo'>
        <Link className={`navigation-logo-link ${theme}`} to='/'>
          MalaCara
        </Link>
      </h1>
    </div>
  )
}
