import { useLocation, useNavigate } from 'react-router-dom'

export const PlaylistCardDetail = ({ playlist }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleMoreItems = (e) => {
    navigate(`./detail/${playlist.name}`, { from: pathname })
  }

  return (
    <ul className='playlist-card-detail'>
      <li className='playlist-card-detail-item'>{playlist.songs[0]?.name}</li>
      <li className='playlist-card-detail-item'>{playlist.songs[1]?.name}</li>
      <li className='playlist-card-detail-item'>{playlist.songs[2]?.name}</li>
      {playlist.songs?.length > 3 ? (
        <li className='playlist-card-detail-item' onClick={handleMoreItems}>
          y {playlist.songs?.length - 3} más...
        </li>
      ) : (
        <span></span>
      )}
    </ul>
  )
}
