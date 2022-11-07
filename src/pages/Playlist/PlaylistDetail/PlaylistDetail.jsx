import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { useThemeContext } from 'app/context'
import { initTrackList } from 'store'

import { ArticleHeading, PrevPageButton } from 'pages/components'
import { Button, Paper } from 'components'

export const PlaylistDetail = () => {
  const dispatch = useDispatch()
  const { theme } = useThemeContext()
  // get the current playlist detail from url
  const { playlistname } = useParams()

  // all playlists in store
  const { playlists } = useSelector(({ playlist }) => playlist)
  // obtain the playlist object
  const selected = playlists.filter((e) => e.name === playlistname)[0]

  // current playlist in store
  const { playlist } = useSelector(({ player }) => player)

  return (
    <section className={`view ${theme}`}>
      <nav className='flex'>
        <PrevPageButton />
        {selected?.name !== playlist?.name ? (
          <Button primary onclick={() => dispatch(initTrackList(selected))}>
            Seleccionar lista
          </Button>
        ) : (
          <span></span>
        )}
      </nav>
      <Paper>
        <ArticleHeading title={playlistname} />
        {selected?.songs?.map((e) => {
          return <p key={e.name}>{e.name}</p>
        })}
      </Paper>
    </section>
  )
}
