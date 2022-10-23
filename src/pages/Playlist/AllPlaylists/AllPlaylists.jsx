import { useSelector } from 'react-redux'
import { PlaylistCard } from './PlaylistCard'

export const AllPlaylists = () => {
  const { playlists } = useSelector(({ playlist }) => playlist)

  return (
    <div className='all-playlists-container'>
      {playlists.map((e) => {
        return <PlaylistCard key={e.name} pl={e} />
      })}
    </div>
  )
}
