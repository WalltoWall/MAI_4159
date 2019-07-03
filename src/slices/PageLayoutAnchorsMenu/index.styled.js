import styled from 'react-emotion'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Container = styled.div`
  position: relative;

  ${t.mq.l} {
    position: sticky;
    top: 0;
    z-index: 99;
  }
`

export const StyledAnchor = styled(AnchorLink)`
  font-color: black;
  z-index: 2;
  padding: 0rem 1rem;
  margin: 0 1rem;
  font-family: ${t.ff.sans2};
  letter-spacing: 0.1rem;
  -webkit-transition: color 0.2s ease-in;
  -moz-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
  width: 100%;
  &:hover {
    color: ${t.c.yellow};
    background-color: ${t.c.lightgrey3};
  }
  ${t.mq.l} {
    width: auto;
    padding: 0rem 1rem;
    :hover {
      background: none;
    }
  }
`

export const Desktop = styled.div`
  background-color: ${t.c.darkgrey2};
  display: none;
  justify-content: center;
  padding: ${t.s(0.5)} 0;
  color: ${t.c.white};
  font-size: ${t.f(0.5)};
  font-weight: 700;
  z-index: 2;
  ${t.mq.l} {
    display: flex;
  }
`

export const Mobile = styled.div`
  position: relative;
  background-color: ${t.c.darkgrey2};
  text-align: center;
  padding: ${t.s(1)} 0;
  color: ${t.c.white};
  font-size: ${t.f(0.5)};
  font-family: ${t.ff.sans2};
  letter-spacing: 0.1rem;
  font-weight: 700;
  z-index: 2;
  ${t.mq.l} {
    display: none;
  }
`

export const FilterMenu = styled.h2`
  cursor: pointer;
  color: ${t.c.white};
  font-size: ${t.f(0.5)};
  font-weight: 700;
  display: inline;
`
export const NavArrow = styled(HoverArrowSVG)`
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  transform: ${p => (p.active ? 'rotate(90deg)' : 'rotate(0deg)')};
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-left: 10px;
  top: 4px;
`

export const StyledAnchorContainer = styled.div`
  display: ${p => (p.isOpen ? 'flex' : 'none')};
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  a {
    padding: 5px 0;
  }
`
