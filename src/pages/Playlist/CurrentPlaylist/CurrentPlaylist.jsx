import { useSelector } from 'react-redux'
import { SinglePL } from '../components'

export const CurrentPlaylist = () => {
  const { playlist } = useSelector(({ player }) => player)

  if (!playlist.songs[0]) {
    return <span />
  }

  return (
    <article>
      <h2>Estas escuchando {playlist.name}</h2>
      <SinglePL playlist={playlist} iscurrent={true} />
    </article>
  )
}
