import { useThemeContext } from 'app/context'
import { footerLists } from 'utils'
import { FooterList } from './components'

export const Footer = () => {
  const { theme } = useThemeContext()
  const lists = footerLists

  return (
    <footer className={`footer-container-app ${theme}`}>
      <FooterList title={'Desarrollo'} list={lists.dev} />
      <FooterList title={'Autor'} list={lists.social} />
      <FooterList title={'Contacto'} list={lists.contact} />
    </footer>
  )
}
