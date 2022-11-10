import { useState } from 'react'

import { useThemeContext } from 'app/context'

export const ToggleTheme = () => {
  const { toggleTheme } = useThemeContext()

  const [checked, setChecked] = useState(false)

  const handleThemeSelector = (e) => {
    toggleTheme()
    setChecked(!checked)
  }

  const finalStyles = `
  toggle-theme-input
  ${checked ? 'active' : ''}
  `

  return (
    <input
      type='checkbox'
      name='toggletheme'
      onClick={handleThemeSelector}
      className={finalStyles}
    />
  )
}
