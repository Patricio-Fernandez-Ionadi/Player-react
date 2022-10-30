// ICONS
import HomeIcon from '@mui/icons-material/Home'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import InfoIcon from '@mui/icons-material/Info'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

// Routes for App
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

// Footer info
export const footerLists = {
  dev: [
    {
      label: 'Ver codigo del proyecto',
      url: 'https://github.com/Patricio-Fernandez-Ionadi/Player-react',
    },
    {
      label: 'Vistita mi perfil de GitHub',
      url: 'http://github.com/Patricio-Fernandez-Ionadi',
    },
  ],
  social: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/patricio-fernandez-ionadi-12320015b/',
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/channel/UCbPO8LoaXFd5KKWf9ebGYiQ',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/ionadipatriciofernandez/',
    },
  ],
  contact: [
    {
      label: 'Correo',
      url: 'mailto:patricio.f.i@live.com',
    },
  ],
}

// URI backend
export const baseApiUri = 'https://protected-springs-12776.herokuapp.com/api'
