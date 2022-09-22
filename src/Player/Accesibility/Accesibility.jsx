import { usePlayerContext } from 'context'

import { ControlMute, ControlRepeat, ControlVolume } from '.'

import styled from 'styled-components'

const Container = styled.div`
  width 100%;
  max-width 800px;
  background-color red;
  display flex;
  flex-direction column;
`

const Controls = styled.div`
  display flex;
  justify-content center;
  align-items center;
`

export const Accesibility = () => {
  const { currentSong, percentSong } = usePlayerContext()

  return (
    <Container>
      <Controls>
        <ControlRepeat />
        <ControlVolume />
        <ControlMute />
      </Controls>
      {/* this may be a component apart later */}
      <div>
        <p>
          {currentSong.song} - <span>{currentSong.duration}</span>
        </p>
        {/* for now is a read only element but could have an onChange function that set the new point of playing of the current song */}

        <input
          type='range'
          value={percentSong}
          readOnly
          alt='percent playing'
        />
      </div>
    </Container>
  )
}
