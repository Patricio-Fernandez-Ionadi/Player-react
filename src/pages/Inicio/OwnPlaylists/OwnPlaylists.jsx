import React from 'react'

import { useSelector } from 'react-redux'

import { Paper } from 'components'
import { routes, showTopPage } from 'utils'
import { ArticleHeading } from 'pages/components'
import { useNavigate } from 'react-router-dom'

export const OwnPlaylists = () => {
  const { playlists } = useSelector(({ playlist }) => playlist)

  const navigate = useNavigate()

  const handleClick = (e) => () => {
    showTopPage()
    navigate(`${routes.playlist.route}/detail/${e.name}`)
  }

  if (!playlists[0]) {
    return <span></span>
  }

  return (
    <article>
      <ArticleHeading
        title={'Explora tus listas de reproducción'}
        pathto={routes.playlist.route}
      />
      <div className='ownplaylist-container'>
        {playlists.map((playlist) => {
          return (
            <Paper
              key={playlist.name}
              elevation={2}
              onclick={handleClick(playlist)}
            >
              <h3>{playlist.name}</h3>
            </Paper>
          )
        })}
      </div>
    </article>
  )
}
