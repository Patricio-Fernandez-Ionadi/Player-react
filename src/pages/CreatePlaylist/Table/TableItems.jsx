import { useState } from 'react'

import { useCreatePlaylist } from '../Context'

import { Button } from 'components'

const TableRow = ({ song }) => {
  const { name, artist, album } = song.e
  const { toggleSong, checkSong, isEmptyList } = useCreatePlaylist()

  const [oneClick, setOneClick] = useState(false)

  const handleOneClickRow = () => {
    setOneClick(!oneClick)
    toggleSong(song.e)
  }

  const songIndex = song.i + 1

  const selectedRow = checkSong(song.e) ? 'clicked-once' : ''

  return (
    <div className={`table-row df ${selectedRow}`} onClick={handleOneClickRow}>
      <div className='non-mobile row-item'>{songIndex}</div>
      <div className='row-item'>{name}</div>
      <div className='non-mobile row-item'>{album}</div>
      <div className='row-item'>{artist}</div>
      <Button
        styles='row-item'
        toggle={checkSong(song.e)}
        primary
        highlight={isEmptyList}
      />
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
