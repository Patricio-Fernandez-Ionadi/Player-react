import styled from 'styled-components'
import { colors } from 'utils/constants'

export const StyledButton = styled.button`
  background: ${colors.background};
  width: 40px;
  padding: 5px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  color: ${colors.white};
  transition: background 0.2s;
  position: relative;
  box-shadow: 1px 1px 3px 0 ${colors.dark};
  &:hover {
    background: ${colors.primary_dark};
  }
`
