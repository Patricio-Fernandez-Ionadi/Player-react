// external
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { useMenuMobileContext, useThemeContext } from 'app/context'

export const Menu = () => {
  const { turnMenu, isOpen } = useMenuMobileContext()
  const { theme } = useThemeContext()

  return (
    <div className='navigation-right navigation-menu-container'>
      <button className={`menu-button ${theme}`} onClick={turnMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  )
}
