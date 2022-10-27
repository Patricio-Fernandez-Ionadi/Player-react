import { useState } from 'react'

import { useCreatePlaylist } from '../Context'
import { Tooltip } from 'components'

export const NameInput = () => {
  const [playlistName, setPlaylistName] = useState('')

  const { setName, isExistentPlaylist } = useCreatePlaylist()

  const handleNameChange = (e) => {
    const value = e.target.value
    setPlaylistName(value)
    setName(value)
  }

  return (
    <Tooltip
      condition={isExistentPlaylist}
      title={'Una lista existente tiene este nombre. Por favor elige otro.'}
    >
      <input
        className={`createplaylist-name-input ${
          isExistentPlaylist ? 'error' : ''
        }`}
        type='text'
        onChange={handleNameChange}
        value={playlistName}
        placeholder='Nombre de la playlist'
      />
    </Tooltip>
  )
}
