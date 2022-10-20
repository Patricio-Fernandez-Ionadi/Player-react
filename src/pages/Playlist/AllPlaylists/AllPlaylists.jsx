import { useSelector } from 'react-redux'

export const AllPlaylists = () => {
  const { playlists } = useSelector(({ playlist }) => playlist)

  return (
    <>
      <h2>Todas las playlists</h2>
      <ul>
        {playlists.map((e) => {
          return <li key={e.name}>{e.name}</li>
        })}
      </ul>
    </>
  )
}
