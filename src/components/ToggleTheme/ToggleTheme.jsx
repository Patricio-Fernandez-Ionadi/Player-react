import { useThemeContext } from 'app/context'
import { useState } from 'react'

export const ToggleTheme = () => {
  const { toggleTheme } = useThemeContext()

  const [checked, setChecked] = useState(false)

  const handleThemeSelector = (e) => {
    toggleTheme()
    setChecked(!checked)
  }

  return (
    <input
      type='checkbox'
      name='toggletheme'
      id='toggletheme'
      onClick={handleThemeSelector}
      className={`toggle-theme-input ${checked ? 'active' : ''}`}
    />
  )
}
