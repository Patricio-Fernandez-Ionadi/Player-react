import { PlayerContextProvider } from 'context'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Navbar, Player } from '../components'

const MainContainer = styled.div`
  height 100vh;
  max-height 100vh;
  width 100vw;
  display flex;
`

const Content = styled.div`
  flex-grow 1;
  background-color yellow;
  padding 10px;
`

const StyledNavigation = styled.div`
  width 50px;
  height 100%;
`

export const App = () => {
  return (
    <>
      <MainContainer>
        <StyledNavigation>
          <Navbar />
        </StyledNavigation>

        <Content>
          <PlayerContextProvider>
            <Player />
          </PlayerContextProvider>
          <Routes>
            {/* PRIVATE ROUTES */}
            <Route path='/' element={<h1>Inicio</h1>} />
            <Route path='/albums' element={<h1>Biblioteca</h1>} />
            {/* PUBLIC ROUTES */}
            <Route path='/login' element={<h1>Login</h1>} />
            <Route path='/register' element={<h1>Register</h1>} />
          </Routes>
        </Content>
      </MainContainer>
    </>
  )
}
