import { usePlayerContext } from 'context'

import styled from 'styled-components'
import RepeatOnIcon from '@mui/icons-material/RepeatOn'
import { colors } from 'utils/constants'

const Button = styled.button`
  border none;
  background transparent;
  width 30px;
  height 30px;
  display flex;
  justify-content center;
  align-items center;
  position relative;

  .active {
    color ${colors.primary};
    // background-color ${colors.primary_light};
    // box-shadow 0 0 0 3px blue inset;
    position absolute;
    z-index 1;
  }
  .disabled{
    color ${colors.primary_dark}
  }

  .overlay{
    position absolute;
    top 4px;
    left 4px;
    width 22px;
    height 22px;
    border-radius 3px;
    background-color transparent;
    box-shadow 0 0 5px 0 ${colors.white} inset,
    0 0 2px 0 ${colors.white};
    z-index 2;
  }
`

export const ControlRepeat = () => {
  const { repeat } = usePlayerContext()

  return (
    <Button onClick={repeat.setRepeat}>
      {repeat.value ? (
        <>
          <span className='overlay'></span>
          <RepeatOnIcon className='active' />
        </>
      ) : (
        <RepeatOnIcon className='disabled' />
      )}
    </Button>
  )
}
