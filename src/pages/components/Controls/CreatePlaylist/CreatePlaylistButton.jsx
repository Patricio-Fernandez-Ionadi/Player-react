import { Link } from 'react-router-dom'

import AddIcon from '@mui/icons-material/Add'

import { useThemeContext } from 'app/context'

import { Button } from 'components'

export const CreatePlaylistButton = () => {
  const { theme } = useThemeContext()

  return (
    <Button primary theme={theme}>
      <Link to='/lista'>
        <AddIcon /> Crear Playlist
      </Link>
    </Button>
  )
}
