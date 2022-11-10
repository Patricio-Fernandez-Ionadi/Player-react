import React from 'react'

import { useThemeContext } from 'app/context'

export const Paper = ({ children, elevation, onclick, styles }) => {
  const { theme } = useThemeContext()

  const elevate = elevation ? `elev-${elevation}` : ''

  const finalStyles = `
  paper
  ${theme}
  ${elevate}
  ${styles ? styles : ''}
  `

  return (
    <article className={finalStyles} onClick={onclick}>
      {children}
    </article>
  )
}
