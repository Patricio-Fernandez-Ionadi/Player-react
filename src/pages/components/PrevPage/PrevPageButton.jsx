import { Button } from 'components'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

export const PrevPageButton = () => {
  const navigate = useNavigate()

  return (
    <Button primary onclick={() => navigate(-1)}>
      <KeyboardBackspaceIcon />
    </Button>
  )
}
