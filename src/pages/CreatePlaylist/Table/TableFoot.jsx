import { Link } from 'react-router-dom'

import { useCreatePlaylist } from '../Context'

export const TableFoot = () => {
  const { isEmptyList, createPlaylistRequest } = useCreatePlaylist()

  const saveList = () => createPlaylistRequest()

  return (
    <div className='tfoot'>
      <button onClick={saveList}>
        {isEmptyList ? 'Listo!' : <Link to='/playlist'>Listo!</Link>}
      </button>
    </div>
  )
}
