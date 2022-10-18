import { Loading } from 'components'
import { usePlayerContext } from './Context'

import { ControlPlayPause, ControlPrev, ControlNext } from './Controls'
import { SongInfo, Statusbar } from './Info'

export const PlayerC = () => {
  const { isLoadingPlayer, player } = usePlayerContext()

  return (
    <div className='player-container flex-col'>
      {player.songs[0] ? (
        isLoadingPlayer ? (
          <Loading />
        ) : (
          <>
            <div className='comands-container flex'>
              <ControlPrev />
              <ControlPlayPause />
              <ControlNext />
            </div>
            <div className='info-container flex-col'>
              <SongInfo />
              <Statusbar />
            </div>
          </>
        )
      ) : (
        <p>Añande una playlist!</p>
      )}
    </div>
  )
}
