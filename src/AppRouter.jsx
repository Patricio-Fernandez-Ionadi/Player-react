import { BrowserRouter } from 'react-router-dom'
import { PlayerContextProvider } from './context'
import { App } from './epApp'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  )
}
