import { createContext, useContext } from 'react'

export const CreatePlaylistContext = createContext()

export const useCreatePlaylist = () => useContext(CreatePlaylistContext)
