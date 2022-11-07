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

  // const handleEndedTrack = (cb) => {
  //   // cb()
  // }
  // track.current?.addEventListener('ended', (e) => {
  //   // if (e.returnValue){
  //   // }
  //   console.log(e)
  // })
  // track.current?.addEventListener('start', (e) => {
  //   // if (e.returnValue){
  //   // }
  //   console.log(e)
  // })
  // useEffect(() => {
  //   //   // console.log(track.current?.ended)
  //   //   if (track.current?.ended) {
  //   console.log('cancion terminada')
  //   //   }
  // }, [track.current?.ended])

  // console.log(track)

  return (
    <aside className='player-container-app'>
      <PlayerC ended={{}} />
      <audio
        ref={track}
        src={songs ? (songs[0] ? songs[currentIndex]?.src : '') : ''}
      />
    </aside>
  )
}
