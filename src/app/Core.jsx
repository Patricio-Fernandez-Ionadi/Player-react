// router-dom
import { BrowserRouter } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import { store } from 'store'
import { MenuMobileProvider } from 'context'
import { App } from './App'

export const Core = () => {
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
