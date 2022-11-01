import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PrevPageButton } from 'pages/components'
import { useThemeContext } from 'app/context'

export const PlaylistDetail = () => {
  const { playlistname } = useParams()
  const { theme } = useThemeContext()

  const { playlists } = useSelector(({ playlist }) => playlist)

  const selected = playlists.filter((e) => e.name === playlistname)[0]

  return (
    <section className={`view ${theme}`}>
      <PrevPageButton />
      <h2>{playlistname}</h2>
      {selected?.songs?.map((e) => {
        return <p key={e.name}>{e.name}</p>
      })}
    </section>
  )
}
