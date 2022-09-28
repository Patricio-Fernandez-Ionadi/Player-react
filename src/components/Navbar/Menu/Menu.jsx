// external
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

// theme

export const Menu = ({ onevent, state }) => {
  return (
    <div className='menu-button-container non-mobile'>
      <button className='menu-button' onClick={onevent}>
        {state ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  )
}
