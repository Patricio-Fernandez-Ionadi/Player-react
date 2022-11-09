import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { useThemeContext } from 'app/context'
import { useLocalStoragePlaylists } from 'hooks'

import { initTrackList } from 'store'
import { setCurrentSong } from 'store'
import { setCurrentIndex } from 'store'
import { turnLoading } from 'store'
import { isFirstSong } from 'store'
import { isLastSong } from 'store'

import { Button, Loading } from 'components'

import { Info } from './Info'
import { Auxiliar } from './Auxiliar'
import { MainControls } from './MainControls'

import { continuePlaying } from 'utils'

export const PlayerC = ({ ended }) => {
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const player = useSelector(({ player }) => player)

  const lsplaylist = useLocalStoragePlaylists()

  const { audio, currentSong } = player
  const { shuffle } = player
  const { isLoading, isPlaying, lastSong, firstSong, repeatAll } = player
  const { currentIndex } = player
  const { length, songs } = player.playlist

  const handleQuikPlay = () => {
    dispatch(initTrackList(lsplaylist[2]))
  }
  const handleNextControl = () => {
    dispatch(turnLoading())
    dispatch(setCurrentSong(false))
    if (shuffle) {
      dispatch(setCurrentIndex(Math.floor(Math.random() * length)))
      return
    }

    if (lastSong) {
      if (repeatAll) {
        dispatch(setCurrentIndex(0))
      }
      return
    } else {
      dispatch(setCurrentIndex(currentIndex + 1))
    }
  }
  const handlePrevControl = () => {
    dispatch(setCurrentSong(false))
    dispatch(turnLoading())
    if (firstSong) {
      if (repeatAll) {
        dispatch(setCurrentIndex(length - 1))
      }
      return
    } else {
      dispatch(setCurrentIndex(currentIndex - 1))
    }
  }

  // handles if metadata of the song is loaded
  useEffect(() => {
    dispatch(setCurrentSong(false))
    if (audio && length > 0) {
      audio.addEventListener('loadedmetadata', () => {
        dispatch(setCurrentSong(songs[currentIndex]))
        dispatch(setCurrentSong(true))
      })
    }
  }, [player.playlist.name, currentIndex])

  // handles the current position in list of the song (is first or is last)
  useEffect(() => {
    if (currentIndex === 0) {
      dispatch(isFirstSong())
    } else if (currentIndex > 0 && currentIndex + 1 < length) {
      // middle
      dispatch(isFirstSong(false))
      dispatch(isLastSong(false))
    } else if (currentIndex + 1 === length) {
      // last song
      dispatch(isLastSong())
    }
  }, [currentSong.src])

  // handles the loading state in player
  useEffect(() => {
    if (currentSong.loaded && isLoading) {
      dispatch(turnLoading(false))
    }
    isPlaying && continuePlaying(audio)
  }, [currentSong.loaded, isLoading])

  if (length <= 0) {
    return (
      <div className={`player-container ${theme}`}>
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
    <div className={`player-container ${theme}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainControls next={handleNextControl} prev={handlePrevControl} />
          <Auxiliar />
          <Info />
        </>
      )}
    </div>
  )
}
