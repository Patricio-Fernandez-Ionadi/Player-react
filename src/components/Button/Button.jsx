import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const Button = (props) => {
  const { children, styles, theme } = props

  // event
  const { onclick } = props

  // styles
  const { primary, error, disabled, success } = props

  // type
  const { toggle } = props

  // animations
  const { highlight } = props

  const handleClick = (e) => {
    if (onclick) {
      onclick(e)
    }
  }

  const finalStyles = `
    btn 
    ${primary ? 'primary' : ''} 
    ${disabled ? 'disabled' : ''}
    ${error ? 'error' : ''}
    ${success ? 'success' : ''}
    ${highlight ? 'highlight' : ''}
    ${theme ? theme : ''}
    ${styles ? styles : ''} 
  `

  if (toggle !== undefined) {
    return (
      <button className={finalStyles} onClick={handleClick}>
        {!toggle ? <AddIcon /> : <RemoveIcon />}
      </button>
    )
  }

  return (
    <button className={finalStyles} onClick={handleClick}>
      {children}
    </button>
  )
}
