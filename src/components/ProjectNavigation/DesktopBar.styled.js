import styled from 'react-emotion'
import { Link } from 'components/Link'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'

export const DesktopContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${t.c.darkgrey2};
  display: none;
  height: ${t.s(3.5)};
  justify-content: center;
  align-items: center;
  color: ${t.c.white};
  font-size: ${t.f(1)};
  font-weight: 700;
  z-index: 99;
  ${t.mq.l} {
    display: flex;
  }
`

export const SubFilterContainer = styled.div`
  position: relative;
  padding: 0 15px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${t.ff.sans2};
  letter-spacing: 0.05rem;
`

export const CurrentFilter = styled.h2`
  font-size: ${t.f(1)};
  display: inline-block;
  margin: 0;
  color: ${p => (p.defaultColor ? t.c.lightgrey2 : t.c.yellow)};
  text-align: center;
  cursor: pointer;
  padding-left: 10px;
`
export const StyledLinkContainer = styled.div`
  background-color: ${t.c.yellow};
  position: absolute;
  display: none;
  flex-direction: column;
  top: 54px;
  width: 200%;
  justify-content: center;
  align-items: center;
  height: auto;
  left: -73px;
  z-index: 1;
  :hover {
    display: flex;
  }
  ${SubFilterContainer}:hover & {
    display: flex;
  }
`
export const StyledLink = styled(Link)`
  z-index: 2;
  padding: 0;
  margin: 0 1rem;
  font-family: ${t.ff.sans2};
  letter-spacing: 0.1rem;
  -webkit-transition: color 0.2s ease-in;
  -moz-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
  color: ${p => (p.isActive ? t.c.yellow : t.c.lightgrey2)};
  &:hover {
    ${t.mq.l} {
      color: ${t.c.yellow};
    }
  }
`

export const NestedStyledLink = styled(Link)`
  z-index: 2;
  padding: ${t.s(-1, 1)};
  width: 100%;
  text-align: center;
  font-family: ${t.ff.sans2};
  letter-spacing: 0.1rem;
  -webkit-transition: background-color 0.2s ease-in;
  -moz-transition: background-color 0.2s ease-in;
  -o-transition: background-color 0.2s ease-in;
  transition: background-color 0.2s ease-in;
  color: black;
  &:hover {
    background-color: ${t.c.lightgrey4};
  }
`

export const NavArrow = styled(HoverArrowSVG)`
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  transform: ${p => (p.active ? 'rotate(90deg)' : 'rotate(0deg)')};
  z-index: 1;
  display: inline-block;
  margin-left: 10px;

  ${SubFilterContainer}:hover & {
    transform: rotate(90deg);
  }
`
export const VerticalLine = styled.div`
  color: ${t.c.yellow};
  font-size: ${t.f(3)};
  font-weight: 400;
  margin-top: -5px;
`

export const SubCategoryContainer = styled.div`
  display: none;
  position: sticky;
  top: 53px;
  z-index: 98;
  justify-content: center;
  align-items: center;
  height: ${t.s(3)};
  background-color: ${t.c.lightgrey3};
  ${t.mq.l} {
    display: flex;
  }
`

export const Filter = styled.p`
  margin: 0 ${t.s(2)};
  cursor: pointer;
  color: ${p => (p.isActive ? t.c.yellow : 'white')};
  font-family: ${t.ff.sans2};
  letter-spacing: ${t.ls.button};
  font-size: ${t.f(1)};
  font-weight: 600;
  transition: color 150ms ease-in-out;
  :hover {
    color: ${t.c.yellow};
  }
`
