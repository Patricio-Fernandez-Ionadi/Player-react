import { useState } from 'react'
import { ThemeContext } from './context'

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  const themeContext = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  )
}
