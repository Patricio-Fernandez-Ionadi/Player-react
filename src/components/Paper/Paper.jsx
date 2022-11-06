import { useThemeContext } from 'app/context'
import React from 'react'
export const Paper = ({ children, elevation, onclick }) => {
  const { theme } = useThemeContext()

  const elevate = elevation ? `elev-${elevation}` : ''

  return (
    <article className={`paper ${theme} ${elevate}`} onClick={onclick}>
      {children}
    </article>
  )
}
