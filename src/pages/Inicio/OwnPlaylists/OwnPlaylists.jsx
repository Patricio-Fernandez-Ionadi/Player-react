import React from 'react'

import { useSelector } from 'react-redux'

import { Paper } from 'components'
import { routes } from 'utils'
import { ArticleHeading } from 'pages/components'

export const OwnPlaylists = () => {
  const { playlists } = useSelector(({ playlist }) => playlist)

  if (!playlists[0]) {
    return <span></span>
  }

  return (
    <article>
      <ArticleHeading
        title={'Explora tus listas de reproducción'}
        pathto={routes.playlist.route}
      />
      <div className='flex'>
        {playlists.map((e) => {
          return (
            <Paper key={e.name} elevation={2}>
              <h3>{e.name}</h3>
            </Paper>
          )
        })}
      </div>
    </article>
  )
}
