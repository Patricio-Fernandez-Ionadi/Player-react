import React from 'react'

import { useThemeContext } from 'app/context'

export const View = ({ children, styles }) => {
  const { theme } = useThemeContext()
  return (
    <section className={`view ${theme} ${styles ? styles : ''}`}>
      {children}
    </section>
  )
}
