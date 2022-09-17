import { createContext, useContext } from 'react'

export const PlayerContext = createContext()

export const usePlayerContext = () => useContext(PlayerContext)
