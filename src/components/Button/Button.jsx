import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const Button = (props) => {
  const { children, styles } = props

  // event
  const { onclick } = props

  // styles
  const { primary, error, disabled } = props

  // type
  const { toggle } = props

  const handleClick = (e) => {
    if (onclick) {
      onclick(e)
    }
  }

  // prettier-ignore
  const finalStyles = `
    btn 
    ${styles ? styles : ''} 
    ${primary ? 'primary' : ''} 
    ${disabled ? 'disabled' : ''}
    ${error ? 'error' : ''} 
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
