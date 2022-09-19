import { usePlayerContext } from 'context'
export const ControlNext = () => {
  const { next } = usePlayerContext()
  return <button onClick={next}>next</button>
}
