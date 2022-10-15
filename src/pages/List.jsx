import { useAllSongs, usePlayerContext } from 'Player'
import React from 'react'
export const List = () => {
  const songs = useAllSongs()

  return (
    <div>
      <ul>
        {songs?.map((e) => {
          return <li key={e.src}>{e.name}</li>
        })}
      </ul>
    </div>
  )
}
