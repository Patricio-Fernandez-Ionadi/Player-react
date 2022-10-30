import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PrevPageButton } from 'pages/components'

export const PlaylistDetail = () => {
  const { playlistname } = useParams()

  const { playlists } = useSelector(({ playlist }) => playlist)

  const selected = playlists.filter((e) => e.name === playlistname)[0]

  return (
    <div>
      <PrevPageButton />
      <h2>{playlistname}</h2>
      {selected?.songs?.map((e) => {
        return <p key={e.name}>{e.name}</p>
      })}
    </div>
  )
}
