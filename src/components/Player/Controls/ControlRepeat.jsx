import { usePlayerContext } from 'context'
import React from 'react'
export const ControlRepeat = () => {
  const { repeat } = usePlayerContext()

  return (
    <button onClick={repeat.setRepeat}>
      {repeat.value ? 'repeatting' : 'repeat?'}
    </button>
  )
}
