import { useState } from 'react'
import { MenuMobileContext } from './MenuMobileContext'

export const MenuMobileProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const turnMenu = (bool) => {
    if (bool) {
      setIsOpen(bool)
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <MenuMobileContext.Provider
      value={{
        isOpen,
        turnMenu,
      }}
    >
      {children}
    </MenuMobileContext.Provider>
  )
}
