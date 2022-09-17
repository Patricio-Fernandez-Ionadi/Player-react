import { usePlayerContext } from 'context'

export const ControlMute = () => {
  const { mute } = usePlayerContext()

  return (
    <button onClick={mute.turn}>{mute.value ? <del>mute</del> : 'mute'}</button>
  )
}
