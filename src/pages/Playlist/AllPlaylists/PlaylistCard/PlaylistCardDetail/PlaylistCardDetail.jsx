export const PlaylistCardDetail = ({ playlist }) => {
  return (
    <ul className='playlist-card-detail'>
      <li className='playlist-card-detail-item'>{playlist.songs[0]?.name}</li>
      <li className='playlist-card-detail-item'>{playlist.songs[1]?.name}</li>
      <li className='playlist-card-detail-item'>{playlist.songs[2]?.name}</li>
      <li className='playlist-card-detail-item'>...</li>
    </ul>
  )
}
