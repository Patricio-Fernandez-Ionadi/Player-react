import React from 'react'

import { useThemeContext } from 'app/context'

import { Banner } from './Banner'
import { OwnPlaylists } from './OwnPlaylists'

export const Inicio = () => {
  const { theme } = useThemeContext()

  return (
    <section>
      <Banner />
      <article className={`view ${theme} after-banner`}>
        <OwnPlaylists />

        <h2>Crea listas a tu medida</h2>
        <div>
          <p>alguna imagen de la UI (link a /lista)</p>
        </div>
      </article>
    </section>
  )
}
