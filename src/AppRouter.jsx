import { BrowserRouter } from 'react-router-dom'
import { PlayerContextProvider } from './context'
import { App } from './epApp'

export const trackList = [
  'assets/media/01 - Fe.mp3',
  'assets/media/02 - Nostalgita.mp3',
  'assets/media/03 - Tu chacalito.mp3',
  'assets/media/04 - Moda.mp3',
  'assets/media/05 - Baila baila.mp3',
  'assets/media/06 - Re jurada.mp3',
  'assets/media/07 - Al fin y al cabo.mp3',
  'assets/media/08 - Bienvenida.mp3',
  'assets/media/09 - Monono.mp3',
  'assets/media/hardcore.mp3',
  'assets/media/relax.mp3',
]

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <PlayerContextProvider trackList={trackList}>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  )
}
