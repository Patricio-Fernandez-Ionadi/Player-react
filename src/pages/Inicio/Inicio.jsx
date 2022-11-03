import { useThemeContext } from 'app/context'
import React from 'react'
import { Banner } from './Banner'
export const Inicio = () => {
  const { theme } = useThemeContext()

  return (
    <section>
      <Banner />
      <article className={`view ${theme} after-banner`}>
        <h2>Explora tus listas de reproducción</h2>
        <div>
          <div>card</div>
          <div>card</div>
          <div>card</div>
          <div>card</div>
          <div>...</div>
        </div>
        <h2>Crea listas a tu medida</h2>
        <div>
          <p>alguna imagen de la UI (link a /lista)</p>
        </div>
      </article>
    </section>
  )
}
