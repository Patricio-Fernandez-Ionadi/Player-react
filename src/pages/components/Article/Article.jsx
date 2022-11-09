import React from 'react'
export const Article = ({ children, styles }) => {
  return (
    <article className={`article-app ${styles ? styles : ''}`}>
      {children}
    </article>
  )
}
