import React from 'react'
import { PlayerProvider } from './Context'
import { PlayerC } from './PlayerC'
export const Player = () => {
  return (
    <PlayerProvider>
      <aside className='player-container-app'>
        <PlayerC />
      </aside>
    </PlayerProvider>
  )
}
