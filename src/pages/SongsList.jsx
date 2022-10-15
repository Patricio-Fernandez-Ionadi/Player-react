import { useAllSongs } from 'Player'
import React from 'react'

const RowItem = ({ song }) => {
  const { name, artist, album } = song.e
  return (
    <tr>
      <td className='non-mobile'>{song.i + 1}</td>
      <td>{name}</td>
      <td className='non-mobile'>{album}</td>
      <td>{artist}</td>
    </tr>
  )
}

export const SongsList = () => {
  const songs = useAllSongs()

  return (
    <div>
      <h2>Lista completa de canciones</h2>
      <table>
        <thead>
          <tr>
            <th className='non-mobile'>n°</th>
            <th>Nombre</th>
            <th className='non-mobile'>Album</th>
            <th>Artista</th>
          </tr>
        </thead>

        <tbody>
          {songs?.map((e, i) => (
            <RowItem key={e.src} song={{ e, i }} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
