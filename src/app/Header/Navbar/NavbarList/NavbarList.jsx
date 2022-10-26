import { useMenuMobileContext, useThemeContext } from 'app/context'

import { NavbarListElement } from './NavbarListElement'

import { routes } from 'utils'

export const NavbarList = () => {
  const { isOpen } = useMenuMobileContext()
  const { theme } = useThemeContext()

  const openMenuMobileClass = isOpen ? 'menu-open' : ''

  const listElements = Object.keys(routes).map((e) => {
    if (routes[e].menuItem && routes[e].principal) {
      return <NavbarListElement key={routes[e].route} elem={routes[e]} />
    } else if (routes[e].menuItem && !routes[e].principal) {
      // console.log(routes[e].label, 'no es principal')
      return <NavbarListElement key={routes[e].route} elem={routes[e]} />
    }
  })

  return (
    <ul className={`navbar-list-container ${openMenuMobileClass} ${theme}`}>
      {listElements}
    </ul>
  )
}
