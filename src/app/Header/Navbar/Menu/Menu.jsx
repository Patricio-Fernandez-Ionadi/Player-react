// external
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { useMenuMobileContext } from 'app/context'

export const Menu = () => {
  const { turnMenu, isOpen } = useMenuMobileContext()

  return (
    <div className='navigation-right navigation-menu-container'>
      <button className='menu-button' onClick={turnMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  )
}
