import React from 'react'
export const Footer = () => {
  return (
    <footer className='footer-container-app'>
      <ul style={{ listStyle: ' none', padding: '0 0 0 20px' }}>
        <li>
          <a
            href='https://github.com/Patricio-Fernandez-Ionadi/Player-react'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ver codigo del proyecto
          </a>
        </li>
        <li>
          <a
            href='http://github.com/Patricio-Fernandez-Ionadi'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vistita mi perfil de GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}
