import { useState } from 'react'
import { useCreatePlaylist } from '../Context'
export const TableHead = () => {
  const { toggleAllSongs, isFullList } = useCreatePlaylist()

  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    toggleAllSongs()
    setToggle(!toggle)
  }

  return (
    <div className='thead flex'>
      <div className='non-mobile head-item'>n°</div>
      <div className='head-item'>Nombre</div>
      <div className='non-mobile head-item'>Album</div>
      <div className='head-item'>Artista</div>
      <div className='head-item' onClick={handleToggle}>
        {toggle || !isFullList ? '+' : '-'}
      </div>
    </div>
  )
}
