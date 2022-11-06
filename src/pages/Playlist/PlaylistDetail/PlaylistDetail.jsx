import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ArticleHeading, PrevPageButton } from 'pages/components'
import { useThemeContext } from 'app/context'
import { Button, Paper } from 'components'
import { useDispatch } from 'react-redux'
import { initTrackList } from 'store'

export const PlaylistDetail = () => {
  const { playlistname } = useParams()
  const dispatch = useDispatch()
  const { theme } = useThemeContext()
  const { playlists } = useSelector(({ playlist }) => playlist)
  const { playlist: plpl } = useSelector(({ player }) => player)
  const selected = playlists.filter((e) => e.name === playlistname)[0]

  return (
    <section className={`view ${theme}`}>
      <nav className='flex'>
        <PrevPageButton />
        {selected?.name !== plpl?.name ? (
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
