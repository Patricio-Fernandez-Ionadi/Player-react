import styled from 'styled-components'
import { colors } from 'utils/constants'

export const StyledPlayerButton = styled.button`
  background: ${colors.background};
  width: 10em;
  max-width: 70px;
  padding: 5px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  color: ${colors.white};
  transition: background 0.2s;
  position: relative;
  box-shadow: 1px 1px 3px 0 ${colors.dark};
  &:hover {
    background: ${colors.primary_dark};
  }
`
