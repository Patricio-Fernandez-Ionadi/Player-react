import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { Button } from 'components'
import { useThemeContext } from 'app/context'

export const AddPlaylistButton = () => {
  const { theme } = useThemeContext()

  return (
    <Button primary theme={theme}>
      <Link to='/lista'>
        <AddIcon /> Crear Playlist
      </Link>
    </Button>
  )
}
