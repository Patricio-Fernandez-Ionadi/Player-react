import { usePlayerContext } from 'context'

export const Statusbar = () => {
  const { percentSong } = usePlayerContext()
  return (
    //  at the moment it is a read only element but could have an onChange function that set the new point of playing of the current song
    <input type='range' value={percentSong} readOnly alt='percent playing' />
  )
}
