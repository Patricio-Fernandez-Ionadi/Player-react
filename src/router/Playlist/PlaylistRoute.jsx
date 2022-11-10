import React from 'react'
import { Outlet } from 'react-router-dom'

import { Playlist } from 'pages'

export const PlaylistRoute = () => {
  return (
    <>
      <Playlist />
      <Outlet />
    </>
  )
}
