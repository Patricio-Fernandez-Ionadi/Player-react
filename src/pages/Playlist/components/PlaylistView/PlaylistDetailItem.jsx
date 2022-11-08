import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { turnLoading } from 'store'
import { setCurrentSong } from 'store'
import { initTrackList } from 'store'

export const PlaylistDetailItem = ({ element, index, playlist, iscurrent }) => {
  const dispatch = useDispatch()

  const { currentIndex } = useSelector(({ player }) => player)

  const handleSelectPlIndex = () => {
    dispatch(turnLoading(true))
    dispatch(setCurrentSong(false))
    dispatch(initTrackList(playlist, index))
  }

  const isCurrentSong =
    iscurrent && currentIndex === index ? 'current-song' : ''

  return (
    <p
      className={`detail-item ${isCurrentSong}`}
      onDoubleClick={handleSelectPlIndex}
    >
      {element.name}
    </p>
  )
}
