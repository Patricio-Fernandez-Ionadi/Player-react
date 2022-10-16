import { useDispatch, useSelector } from 'react-redux'
import { removeSongFromPlaylist } from 'store'
import { addSongToPlaylist } from 'store'

const RowItem = ({ song, onevent }) => {
  const { name, artist, album } = song.e
  const playlist = useSelector(({ playlist }) => playlist)

  const songInPlaylist = playlist.includes(song.e)

  return (
    <div className='table-row flex'>
      <div className='non-mobile row-item'>{song.i + 1}</div>
      <div className='row-item'>{name}</div>
      <div className='non-mobile row-item'>{album}</div>
      <div className='row-item'>{artist}</div>
      <div className='row-item' onClick={() => onevent(song.e)}>
        {songInPlaylist ? '-' : '+'}
      </div>
    </div>
  )
}

export const TableItems = ({ songs }) => {
  const dispatch = useDispatch()
  const playlist = useSelector(({ playlist }) => playlist)

  const handleClick = (song) => {
    const songInPlaylist = playlist.includes(song)

    if (!songInPlaylist) {
      dispatch(addSongToPlaylist(song))
    } else if (songInPlaylist) {
      dispatch(removeSongFromPlaylist(song))
    }
  }

  return (
    <div className='table-body'>
      {songs?.map((e, i) => (
        <RowItem key={e.src} song={{ e, i }} onevent={handleClick} />
      ))}
    </div>
  )
}
