import { useDispatch } from 'react-redux'

import { useLocalStoragePlaylists } from 'hooks'
import { useThemeContext } from 'app/context'
import { usePlayerContext } from './Context'
import { setCurrentPlaylist } from 'store'

import { Button, Loading } from 'components'
import { Info } from './Info'
import { Auxiliar } from './Auxiliar'
import { MainControls } from './MainControls'

export const PlayerC = () => {
  const { isLoadingPlayer, player } = usePlayerContext()
  const { theme } = useThemeContext()
  const lsplaylist = useLocalStoragePlaylists()
  const dispatch = useDispatch()

  const handleQuikPlay = () => {
    dispatch(setCurrentPlaylist(lsplaylist[0]))
  }

  if (!player.songs[0]) {
    return (
      <div className={`player-container flex-col ${theme}`}>
        <p>Añande una playlist!</p>
        {lsplaylist[0] ? (
          <Button theme={theme} primary onclick={handleQuikPlay}>
            Reproduccion rápida
          </Button>
        ) : (
          <Button theme={theme} disabled>
            Reproduccion rápida
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className={`player-container flex-col ${theme}`}>
      {isLoadingPlayer ? (
        <Loading />
      ) : (
        <>
          <MainControls />
          <Auxiliar />
          <Info />
        </>
      )}
    </div>
  )
}
