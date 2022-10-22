import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

export const AddPlaylistButton = () => {
  return (
    <button>
      <Link to='/lista'>
        New Playlist <AddIcon />
      </Link>
    </button>
  )
}
