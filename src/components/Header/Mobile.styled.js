import styled from 'react-emotion'
import { Mobile } from 'components/Header/Mobile'
import { css } from 'emotion'
import { transparentize } from 'polished'
import t from 'theme'

export const HamburgerMenuContainer = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 30;
  right: 1.5rem;
  top: 1.5rem;
  ${t.mq.l} {
    display: none;
  }
`

export const StyledMobile = styled(Mobile)`
  box-shadow: 0 4px 24px ${transparentize(0.75, t.c.masonyellow)},
    0 1px 0 ${transparentize(0.9, t.c.masonyellow)};
  left: 0;
  position: absolute;
  right: 0;
  right: 0;
  top: 0;
  z-index: 2;

  ${t.mq.l} {
    display: none;
  }
`
export const Container = styled.div`
  background-color: blue;
  color: ${t.c.masonyellow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: ${t.lh.solid};
  padding: ${t.s(2, '0')};
  pointer-events: ${p => (p.isOpen ? 'auto' : 'none')};
  text-align: center;
  transition: transform ${t.t};
  transition-property: transform;
  transition-duration: ${t.t};
  transform: translateY(${p => (p.isOpen ? 0 : '-110%')});
`

export const List = styled.ul`
  margin: ${t.s(0)} 0 0;
  padding: 0;
`