import { ListElement } from '.'

export const List = () => {
  return (
    <ul className='navbar-list-container'>
      <ListElement route='/' label='Inicio' />
      <ListElement route='/lista' label='Lista' />
      <ListElement route='/playlist' label='Playlist' />
      <ListElement route='/login' label='Login' />
    </ul>
  )
}
