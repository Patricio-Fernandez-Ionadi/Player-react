import { useThemeContext } from 'app/context'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { turnPlaying } from 'store'
import { turnLoading } from 'store'
import { setCurrentSong } from 'store'
import { initTrackList } from 'store'

export const DetailItem = ({ element, index, playlist, iscurrent }) => {
  const dispatch = useDispatch()
  const { theme } = useThemeContext()

  const { currentIndex, isPlaying } = useSelector(({ player }) => player)

  const handleSelectPlIndex = () => {
    if (!isPlaying) {
      dispatch(turnPlaying(true))
    }
    dispatch(turnLoading(true))
    dispatch(setCurrentSong(false))
    dispatch(initTrackList(playlist, index))
  }

  const isCurrentSong =
    iscurrent && currentIndex === index ? 'current-song' : ''

  return (
    <p
      className={`detail-item ${isCurrentSong} ${theme}`}
      onDoubleClick={handleSelectPlIndex}
    >
      {element.name}
    </p>
  )
}
