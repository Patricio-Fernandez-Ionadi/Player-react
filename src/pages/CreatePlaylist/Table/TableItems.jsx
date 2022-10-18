import { useCreatePlaylist } from '../Context'

const TableRow = ({ song }) => {
  const { name, artist, album } = song.e
  const { toggleSong, checkSong } = useCreatePlaylist()

  return (
    <div className='table-row flex'>
      <div className='non-mobile row-item'>{++song.i}</div>
      <div className='row-item'>{name}</div>
      <div className='non-mobile row-item'>{album}</div>
      <div className='row-item'>{artist}</div>
      <div className='row-item' onClick={() => toggleSong(song.e)}>
        {checkSong(song.e) ? '-' : '+'}
      </div>
    </div>
  )
}

export const TableItems = () => {
  const { songs } = useCreatePlaylist()

  return (
    <div className='table-body'>
      {songs?.map((e, i) => (
        <TableRow key={e.src} song={{ e, i }} />
      ))}
    </div>
  )
}
