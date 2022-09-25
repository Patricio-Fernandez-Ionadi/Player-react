// router-dom
import { BrowserRouter } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import { store } from 'store'
// components
import { App } from './epApp'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
