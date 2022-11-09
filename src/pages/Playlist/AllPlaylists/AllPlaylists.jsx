import { Article } from 'pages/components'
import { useSelector } from 'react-redux'
import { PlaylistCard } from './PlaylistCard'

export const AllPlaylists = () => {
  const { playlists } = useSelector(({ playlist }) => playlist)

  return (
    <Article>
      <h2>Listas creadas</h2>

      <div className='playlist-cards-containter'>
        {playlists.map((e) => {
          return <PlaylistCard key={e.name} pl={e} />
        })}
      </div>
    </Article>
  )
}
