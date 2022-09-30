// router-dom
import { BrowserRouter } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import { store } from 'store'
// components
import { App } from './epApp'
import { MenuMobileProvider } from 'context'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MenuMobileProvider>
          <App />
        </MenuMobileProvider>
      </Provider>
    </BrowserRouter>
  )
}
