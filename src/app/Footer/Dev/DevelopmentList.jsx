import React from 'react'
import { footerLists } from 'utils'
export const DevelopmentList = () => {
  return (
    <div className={`footer-column`}>
      <h4>Desarrollo</h4>
      <ul style={{ listStyle: ' none', padding: 0 }}>
        <li>
          <a
            href={footerLists.dev[0].url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {footerLists.dev[0].label}
          </a>
        </li>
        <li>
          <a
            href={footerLists.dev[1].url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {footerLists.dev[1].label}
          </a>
        </li>
      </ul>
    </div>
  )
}
