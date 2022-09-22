import styled from 'styled-components'
import { Accesibility } from './Accesibility/Accesibility'
import { ControlPlayPause, ControlPrev, ControlNext } from './Controls'

const PlayerContainer = styled.div`
  width 100%;
  display flex;
  flex-direction column;
  justify-content center;
  align-items center;
`

export const Player = () => {
  return (
    <PlayerContainer>
      <Accesibility />
      <ControlPrev />
      <ControlPlayPause />
      <ControlNext />
    </PlayerContainer>
  )
}
