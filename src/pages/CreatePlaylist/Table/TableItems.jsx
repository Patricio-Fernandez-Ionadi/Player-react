import { useState } from 'react'
import { useCreatePlaylist } from '../Context'

const TableRow = ({ song }) => {
  const { name, artist, album } = song.e
  const { toggleSong, checkSong } = useCreatePlaylist()

  const [oneClick, setOneClick] = useState(false)

  const handleOneClickRow = (e) => {
    setOneClick(!oneClick)
    toggleSong(song.e)
  }

  const songIndex = song.i + 1

  return (
    <div
      className={`table-row flex ${checkSong(song.e) ? 'clicked-once' : ''}`}
      onClick={handleOneClickRow}
    >
      <div className='non-mobile row-item'>{songIndex}</div>
      <div className='row-item'>{name}</div>
      <div className='non-mobile row-item'>{album}</div>
      <div className='row-item'>{artist}</div>
      <div className='row-item'>{checkSong(song.e) ? '-' : '+'}</div>
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
