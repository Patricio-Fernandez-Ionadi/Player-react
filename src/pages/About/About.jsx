import React from 'react'

import { View } from 'components'
import { Article } from 'pages/components'

export const About = () => {
  return (
    <View>
      <Article>
        <h2>Porque existe esta App?</h2>
        <p>
          Esta aplicacion fue desarrollada como practica de desarrollo web y
          para uso propio mientras hago otras actividades o en mi trabajo sin
          tener la necesidad de estar omitiendo anuncios o pagando
          suscripciones. Es tambien un desafio personal y un gran paso en mi
          aprendizaje ya que es la primer aplicacion que puedo considerar
          finalizada (aunque el desarrollo nunca se termine realmente).
        </p>

        <h2>Informacion</h2>
        <h3>Codigo del proyecto</h3>
        <p>
          El codigo de la aplicacion esta subido en{' '}
          <a
            href='https://github.com/Patricio-Fernandez-Ionadi'
            target='_blank'
            rel='noopener noreferrer'
          >
            mi perfil de GitHub
          </a>{' '}
          en el repositorio{' '}
          <a
            href='https://github.com/Patricio-Fernandez-Ionadi/Player-react'
            target='_blank'
            rel='noopener noreferrer'
          >
            Player-react
          </a>
        </p>
      </Article>
    </View>
  )
}
