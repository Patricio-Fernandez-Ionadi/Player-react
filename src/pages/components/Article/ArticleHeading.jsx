import React from 'react'
import { Link } from 'react-router-dom'
export const ArticleHeading = ({ title, pathto }) => {
  return (
    <header>
      <h2 className='article-heading-h2'>
        <Link to={pathto}>{title}</Link>
      </h2>
    </header>
  )
}
