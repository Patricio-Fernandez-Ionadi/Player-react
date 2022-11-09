import React from 'react'

import { useThemeContext } from 'app/context'

import { Banner } from './Banner'
import { OwnPlaylists } from './OwnPlaylists'
import { ArticleHeading } from 'pages/components'
import { routes } from 'utils'

export const Inicio = () => {
  const { theme } = useThemeContext()

  return (
    <section>
      <Banner />
      <div className={`view ${theme} after-banner`}>
        <OwnPlaylists />

        <article>
          <ArticleHeading
            title={`Crea listas a tu medida`}
            pathto={routes.lista.route}
          />
          <p>alguna imagen de la UI (link a /lista)</p>
        </article>
      </div>
    </section>
  )
}
