import { usePlayerContext } from './Context'

import { ControlPlayPause, ControlPrev, ControlNext } from './Controls'
import { SongInfo, Statusbar } from './Info'

export const PlayerC = () => {
  const { isLoadingPlayer } = usePlayerContext()

  return (
    <div className='player-container flex-col'>
      {isLoadingPlayer ? (
        <h1>loading</h1>
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
      )}
    </div>
  )
}

// setSongToPlay({
//   listPosition: 0,
//   index: 1,
//   duration: timer,
//   duration_sec: secs,
//   percent_played: 0,
//   src: `${trackList[0]?.src}`,
//   name: `${trackList[0]?.name}`,
// })
