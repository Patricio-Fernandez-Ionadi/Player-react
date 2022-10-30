import React from 'react'
export const ListItem = ({ item }) => {
  return (
    <li>
      <a href={item.url} target='_blank' rel='noopener noreferrer'>
        {item.label}
      </a>
    </li>
  )
}
