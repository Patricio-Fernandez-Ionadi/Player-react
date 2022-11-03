import { useEffect, useRef } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { setRefElement } from 'store'

import { PlayerC } from './PlayerC'

export const Player = () => {
  const track = useRef()
  const dispatch = useDispatch()
  const player = useSelector(({ player }) => player)

  const { audio, currentIndex } = player
  const { songs } = player.playlist

  useEffect(() => {
    if (!audio && track.current) {
      dispatch(setRefElement(track.current))
    }
  }, [])

  return (
    <aside className='player-container-app'>
      <PlayerC />
      <audio
        ref={track}
        src={songs ? (songs[0] ? songs[currentIndex]?.src : '') : ''}
      />
    </aside>
  )
}
