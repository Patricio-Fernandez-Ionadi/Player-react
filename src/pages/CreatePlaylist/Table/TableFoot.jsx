import { Link } from 'react-router-dom'

import { useCreatePlaylist } from '../Context'

import { Button } from 'components'

export const TableFoot = () => {
  const {
    isEmptyList,
    isEmptyName,
    isExistentPlaylist,
    createPlaylistRequest,
  } = useCreatePlaylist()
  const saveList = () => createPlaylistRequest()

  return (
    <div className='tfoot'>
      {isEmptyList || isEmptyName || isExistentPlaylist ? (
        <Button disabled>Listo!</Button>
      ) : (
        <Button onclick={saveList} success>
          <Link to='/playlist'>Listo!</Link>
        </Button>
      )}
    </div>
  )
}
