# Music player - React

### Ver el proyecto en [malacara.netlify.app](https://malacara.netlify.app/)

ultimo build `commit 2dcfc82b96295635d2eaba71b8ffcf957424e09f` 23/10/22

Actualmente trabajando en: estilos del reproductor para movil y desktop

## General

### Funcionamiento principal

Reproductor de canciones en un contexto global de la app para que desde cualquier vista se pueda tener constanmentente el control del mismo. Cuenta con las funciones basicas de cualquier reproductor:

- Autoplay
- Repeat
- Control de volumen / mute
- Pasar a la siguiente cancion o volver a la anterior
- Play / pause
- Visor de status de la cancion en reproductor

## Dependencias

- @emotion/react: 11.10.4,
- @emotion/styled: 11.10.4,
- @mui/icons-material: 5.10.6,
- @mui/material: 5.10.6,
- react: 18.2.0,
- react-dom: 18.2.0,
- react-redux: 8.0.4,
- react-router-dom: 6.4.0,
- react-scripts: 5.0.1,
- redux-thunk: 2.4.1,
- styled-components: 5.3.5
- - redux-devtools-extension: 2.13.9 (dev)

## Recordatorios

- al seleccionar una lista de reproduccion no se actualiza el index de la lista previa ni se reproduce aunque el estado se mantenga en isPlaying
- en cada PlaylistCard dentro de los detalles hacer que sean links a esa cancion en esa lista
- en PlaylistCard el button "ver mas" aun esa bajo consideracion

- render de vista de current playlist sin funcionamiento
