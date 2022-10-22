export const PlaylistCardDetail = ({ playlist }) => {
  return (
    <ul>
      <li>{playlist.songs[0]?.name}</li>
      <li>{playlist.songs[1]?.name}</li>
      <li>{playlist.songs[2]?.name}</li>
      <li>...</li>
    </ul>
  )
}
