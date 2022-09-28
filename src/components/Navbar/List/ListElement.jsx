import { ListElementLink } from './ListElementLink'
import { ListElementLinkIcon } from './ListElementLinkIcon'

export const ListElement = (props) => {
  return (
    <li className='navbar-list-element flex'>
      <ListElementLink {...props} />
      <ListElementLinkIcon {...props} />
    </li>
  )
}
