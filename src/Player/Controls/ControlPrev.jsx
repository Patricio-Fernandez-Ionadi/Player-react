import React from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'

import { usePlayerContext } from 'context'
import { StyledButton } from 'theme'

export const ControlPrev = () => {
  const { prev } = usePlayerContext()
  return (
    <StyledButton onClick={prev}>
      <SkipPreviousIcon />
    </StyledButton>
  )
}
