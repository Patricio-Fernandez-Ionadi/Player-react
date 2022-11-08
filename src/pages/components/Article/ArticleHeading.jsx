import React from 'react'
import { Link } from 'react-router-dom'

import { showTopPage } from 'utils'

export const ArticleHeading = ({ title, pathto }) => {
  return (
    <header onClick={showTopPage}>
      <h2 className='article-heading-h2'>
        <Link to={pathto}>{title}</Link>
      </h2>
    </header>
  )
}
