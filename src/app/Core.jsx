import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'store'
import { MenuMobileProvider } from 'app/context'

import { App } from './App'

import '../theme/index.css'
import { ThemeProvider } from './context/Theme'

export const Core = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <MenuMobileProvider>
            <App />
          </MenuMobileProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}
