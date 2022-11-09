import { Article, SinglePL } from 'pages/components'
import { useSelector } from 'react-redux'

export const CurrentPlaylist = () => {
  const { playlist } = useSelector(({ player }) => player)

  if (!playlist.songs[0]) {
    return <span />
  }

  return (
    <Article>
      <h2>Estas escuchando {playlist.name}</h2>
      <SinglePL playlist={playlist} iscurrent={true} />
    </Article>
  )
}
