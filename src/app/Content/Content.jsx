import { useThemeContext } from 'app/context'

export const Content = ({ children }) => {
  const { theme } = useThemeContext()

  return (
    <section className={`body-container-app view ${theme}`}>{children}</section>
  )
}
