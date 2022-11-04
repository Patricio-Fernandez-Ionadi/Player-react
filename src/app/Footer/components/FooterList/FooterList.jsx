import React from 'react'
import { ListItem } from '.'
export const FooterList = ({ title, list }) => {
  return (
    <article className={`footer-column`}>
      <h4>{title}</h4>
      <ul style={{ listStyle: ' none', padding: 0 }}>
        {list.map((e) => {
          return <ListItem key={e.url} item={e} />
        })}
      </ul>
    </article>
  )
}
