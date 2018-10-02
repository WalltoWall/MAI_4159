import styled from 'react-emotion'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'

export const StyledAnchor = styled.a`
  font-color: black;
  z-index: 2;
  padding: 0 1rem;
  margin: 0 2rem;
  font-family: ${t.ff.sans2};
  letter-spacing: 0.1rem;
  -webkit-transition: color 0.2s ease-in;
  -moz-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${t.c.yellow};
  }
  ${t.mq.l} {
    &:last-child {
      border-left: 1px solid white;
      padding-left: 3rem;
      margin-left: 0;
    }
  }  
`

export const Desktop = styled.div`
  position: relative;
  background-color: ${t.c.darkgrey2};
  display: none;
  justify-content: center;
  padding: ${t.s(1)} 0;
  color: ${t.c.white};
  font-size: ${t.f(1)};
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
  font-size: ${t.f(1)};
  font-weight: 700;
  z-index: 2;
  ${t.mq.l} {
    display: none;
  }
`

export const FilterMenu = styled.h2`
  cursor: pointer;
  color: ${t.c.white};
  font-size: ${t.f(1)};
  font-weight: 700;
  display: inline;
`
export const NavArrow = styled(HoverArrowSVG)`
  flex-shrink: 0;
  height: 1.2rem;
  transform: ${p => (p.active ? 'rotate(90deg)' : 'rotate(0deg)')};
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-left: 10px;
  top: 4px;
`

export const StyledAnchorContainer = styled.div`  
  display: ${p => p.isOpen ? 'flex' : 'none'};
  
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  margin-top: 15px;
  a {
    padding: 5px 0;
  }
`