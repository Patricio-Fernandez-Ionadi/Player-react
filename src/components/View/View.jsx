import React from 'react'

import { useThemeContext } from 'app/context'

export const View = ({ children, styles }) => {
  const { theme } = useThemeContext()

  const handleClick = (e) => {
    if (onclick) {
      onclick(e)
    }
  }

  const finalStyles = `
  view 
  ${theme ? theme : ''}
  ${styles ? styles : ''}
  `

  return (
    <section className={finalStyles} onClick={handleClick}>
      {children}
    </section>
  )
}
