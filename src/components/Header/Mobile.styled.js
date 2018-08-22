import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const HamburgerMenuContainer = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 30;
  right: 0.7rem;
  top: 0.7rem;

  ${t.mq.l} {
    display: none;
  }
`

export const hamburgerMenuClassName = css`
  color: red;
  position: absolute;
  right: 0;
`

