import { useSelector } from 'react-redux'

export const CurrentPlaylist = () => {
  const { currentPlaylist } = useSelector(({ playlist }) => playlist)

  return (
    <div>
      {currentPlaylist.songs[0] ? (
        <>
          <h2>Seleccionada: {currentPlaylist.name}</h2>
          <ul>
            {currentPlaylist.songs.map((e) => {
              return <li key={e.name}>{e.name}</li>
            })}
          </ul>
        </>
      ) : (
        <span></span>
      )}
    </div>
  )
}
