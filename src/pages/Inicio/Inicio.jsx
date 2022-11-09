import React from 'react'

import { Banner } from './Banner'

import { View } from 'components'
import { OwnPlaylists } from './OwnPlaylists'

import { ArticleHeading } from 'pages/components'

import { routes } from 'utils'

export const Inicio = () => {
  return (
    <section>
      <Banner />
      <View styles='after-banner'>
        <OwnPlaylists />
        <article>
          <ArticleHeading
            title={`Crea listas a tu medida`}
            pathto={routes.lista.route}
          />
          <p>alguna imagen de la UI (link a /lista)</p>
        </article>
      </View>
    </section>
  )
}
