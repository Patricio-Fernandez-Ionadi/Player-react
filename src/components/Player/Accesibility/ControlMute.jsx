import { usePlayerContext } from 'context'

export const ControlMute = () => {
  const { mute } = usePlayerContext()

  return (
    <button onClick={mute.setMute}>
      {mute.value ? <del>mute</del> : 'mute'}
    </button>
  )
}
