import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'store'
import { MenuMobileProvider } from 'app/context'

import { App } from './App'

import '../theme/index.css'

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
