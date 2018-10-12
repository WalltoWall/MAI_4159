import styled from 'react-emotion'
import { Mobile } from 'components/Header/Mobile'
import { transparentize } from 'polished'
import t from 'theme'

export const HamburgerMenuContainer = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  right: 1.5rem;
  top: 1.5rem;
  ${t.mq.l} {
    display: none;
  }
`

export const StyledMobile = styled(Mobile)`
  box-shadow: 0 4px 24px ${transparentize(0.75, t.c.yellow)},
    0 1px 0 ${transparentize(0.9, t.c.yellow)};
  left: 0;
  position: absolute;
  right: 0;
  right: 0;
  top: 0;
  z-index: 999;
  height: 100vh;
  overflow-y: hidden;
  ${t.mq.l} {
    display: none;
  }
`
export const Container = styled.div`
  background-color: ${t.c.darkgrey2};
  color: ${t.c.yellow};
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
  z-index: 999;
`

export const MobileNavOverlay = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  opacity: 0.5;
  ${t.mq.l} {
    display: none;
  }
`
