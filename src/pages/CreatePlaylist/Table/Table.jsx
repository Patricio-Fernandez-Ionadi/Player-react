import { TableFoot, TableHead, TableItems } from '.'

export const Table = () => {
  return (
    <div className='table-container flex-col'>
      <TableHead />
      <TableItems />
      <TableFoot />
    </div>
  )
}
