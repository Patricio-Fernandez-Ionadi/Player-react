import { useSelector } from 'react-redux'
import { PlaylistCard } from './PlaylistCard'

export const AllPlaylists = () => {
  const { playlists } = useSelector(({ playlist }) => playlist)

  return (
    <article className='all-playlists-container'>
      {playlists.map((e) => {
        return <PlaylistCard key={e.name} pl={e} />
      })}
    </article>
  )
}
