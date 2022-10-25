import React from 'react'
import { CreatePlaylistProvider } from './Context'
import { CreatePlaylistC } from './CreatePlaylistC'
export const CreatePlaylist = () => {
  return (
    <CreatePlaylistProvider>
      <CreatePlaylistC />
    </CreatePlaylistProvider>
  )
}
