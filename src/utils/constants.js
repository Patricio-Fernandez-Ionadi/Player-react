// ICONS
import HomeIcon from '@mui/icons-material/Home'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import InfoIcon from '@mui/icons-material/Info'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

export const routes = {
  home: {
    route: '/',
    label: 'Inicio',
    icon: <HomeIcon />,
    menuItem: true,
    principal: true,
  },
  playlist: {
    route: '/playlist',
    label: 'Playlist',
    icon: <QueueMusicIcon />,
    menuItem: true,
    principal: true,
  },
  about: {
    route: '/about',
    label: 'Acerca de',
    icon: <InfoIcon />,
    menuItem: true,
    principal: false,
  },
  lista: {
    route: '/lista',
    label: 'Lista',
    icon: <PlaylistAddIcon />,
    menuItem: false,
    principal: false,
  },
}

// URI backend
export const baseApiUri = 'https://protected-springs-12776.herokuapp.com/api'
