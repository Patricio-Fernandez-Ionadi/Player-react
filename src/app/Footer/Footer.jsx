import { useThemeContext } from 'app/context'
import { CointactList } from './Contact'
import { DevelopmentList } from './Dev'
import { SocialList } from './Social'

export const Footer = () => {
  const { theme } = useThemeContext()

  return (
    <footer className={`footer-container-app ${theme} flex`}>
      <DevelopmentList />
      <SocialList />
      <CointactList />
    </footer>
  )
}
