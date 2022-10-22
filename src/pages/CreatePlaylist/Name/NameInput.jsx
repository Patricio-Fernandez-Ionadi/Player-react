import { useState } from 'react'

import { useCreatePlaylist } from '../Context'

export const NameInput = () => {
  const [playlistName, setPlaylistName] = useState('')

  const { setName } = useCreatePlaylist()

  const handleNameChange = (e) => {
    const value = e.target.value
    setPlaylistName(value)
    setName(value)
  }
  return (
    <input
      className='createplaylist-name-input'
      type='text'
      onChange={handleNameChange}
      value={playlistName}
      placeholder='Nombre de la playlist'
    />
  )
}
