import { Button } from 'components'
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
    <div className='thead df'>
      <div className='non-mobile head-item'>n°</div>
      <div className='head-item'>Nombre</div>
      <div className='non-mobile head-item'>Album</div>
      <div className='head-item'>Artista</div>
      <Button
        styles='head-item'
        onclick={handleToggle}
        toggle={isFullList}
        primary
      />
    </div>
  )
}
