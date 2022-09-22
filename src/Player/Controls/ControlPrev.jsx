import { usePlayerContext } from 'context'
import React from 'react'
export const ControlPrev = () => {
  const { prev } = usePlayerContext()
  return <button onClick={prev}>prev</button>
}
