import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { initTrackList } from 'store'

import { PageControls, SinglePL } from 'pages/components'
import { Button, View } from 'components'

export const PlaylistDetail = () => {
  const dispatch = useDispatch()
  // get the current playlist detail from url
  const { playlistname } = useParams()

  // all playlists in store
  const { playlists } = useSelector(({ playlist }) => playlist)
  // obtain the playlist object
  const selected = playlists.filter((e) => e.name === playlistname)[0]

  // current playlist in store
  const { playlist } = useSelector(({ player }) => player)

  return (
    <View>
      <PageControls>
        {selected?.name !== playlist?.name ? (
          <Button primary onclick={() => dispatch(initTrackList(selected))}>
            Seleccionar lista
          </Button>
        ) : (
          <span></span>
        )}
      </PageControls>
      <SinglePL
        playlist={selected}
        iscurrent={selected?.name === playlist?.name}
      />
    </View>
  )
}
