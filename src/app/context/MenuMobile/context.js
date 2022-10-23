import { createContext, useContext } from 'react'

export const MenuMobileContext = createContext()

export const useMenuMobileContext = () => useContext(MenuMobileContext)
