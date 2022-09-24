import { usePlayerContext } from 'context'

import RepeatOnIcon from '@mui/icons-material/RepeatOn'

import { StyledButton } from 'theme'
import './style/index.css'

export const ControlRepeat = () => {
  const { repeat } = usePlayerContext()

  return (
    <StyledButton onClick={repeat.setRepeat}>
      {repeat.value ? (
        <>
          <span className='overlay'></span>
          <RepeatOnIcon className='active' />
        </>
      ) : (
        <RepeatOnIcon />
      )}
    </StyledButton>
  )
}
