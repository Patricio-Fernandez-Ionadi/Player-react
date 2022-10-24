import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { Button } from 'components'

export const AddPlaylistButton = () => {
  return (
    <Button>
      <Link to='/lista'>
        New Playlist <AddIcon />
      </Link>
    </Button>
  )
}
