import { Paper } from 'components'
import React from 'react'
import { DetailItem } from './item/DetailItem.jsx'
export const SinglePL = ({ playlist, iscurrent }) => {
  if (!playlist) {
    return <span></span>
  }

  return (
    <Paper elevation={4} styles='gap'>
      <h3>{playlist.name}</h3>
      {playlist?.songs?.map((e, i) => {
        return (
          <DetailItem
            key={e.name}
            element={e}
            index={i}
            iscurrent={iscurrent}
            playlist={playlist}
          />
        )
      })}
    </Paper>
  )
}
