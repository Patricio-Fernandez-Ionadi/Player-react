import { useAllSongs } from 'Player'

import { TableFoot, TableHead, TableItems } from '.'

export const Table = () => {
  const { songs } = useAllSongs()

  return (
    <div className='table-container flex-col'>
      <TableHead />
      <TableItems songs={songs} />
      <TableFoot />
    </div>
  )
}
