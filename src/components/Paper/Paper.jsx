import { useThemeContext } from 'app/context'
import React from 'react'
export const Paper = ({ children, elevation, onclick, styles }) => {
  const { theme } = useThemeContext()

  const elevate = elevation ? `elev-${elevation}` : ''

  return (
    <article
      className={`paper ${theme} ${elevate} ${styles ? styles : ''}`}
      onClick={onclick}
    >
      {children}
    </article>
  )
}
