import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
`

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 50%;
  height: ${t.s(7.5)};

  ${t.mq.s} {
    height: ${t.s(9)};
  }

  ${t.mq.xxx} {
    height: ${t.s(9.5)};
  }

  ${t.mq.l} {
    width: 25%;
  }
`

export const ImageContainer = styled.div`
  background-color: ${t.c.yellow};
  height: 100%;
  width: 100%;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const OverlayContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  bottom: 0;
  left: 0;
  color: yellow;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: black;
  opacity: ${p => (p.isActive ? 0 : 0.5)};
  cursor: ${p => (p.isActive ? 'pointer' : 'not-allowed')};
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  background-color: white;
  transition: all 100ms ease-in-out;
  opacity: 0.8;
  padding: ${t.s(0.2)} ${t.s(1)};
  height: 20%;
  position: absolute;
  bottom: 0;
  left: 0;
  ${t.mq.s} {
    height: 30%;
  }
  ${t.mq.l} {
    opacity: 0;
    padding: ${t.s(0)} ${t.s(0)};
    height: 60px;
    ${StyledLink}:hover & {
      opacity: ${p => (p.isActive ? 0.8 : 0)};
      height: 100%;
    }
  }
`
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: ${t.f(0)};
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  letter-spacing: ${t.ls.button};
  font-weight: 400;
  padding: 0;
  margin: 0;
  ${t.mq.s} {
    font-size: ${t.f(1)};
    padding: 0 0 5px 0;
  }
  ${t.mq.l} {
    font-size: ${t.f(2.5)};
  }
  ${t.mq.x} {
    font-size: ${t.f(3.5)};
  }
`

export const SubTitle = styled.div`
  display: none;
  text-transform: uppercase;
  font-size: ${t.f(-1.5)};
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  letter-spacing: ${t.ls.button};
  font-weight: 700;
  padding: 2px 0;
  margin: 0;
  ${t.mq.s} {
    display: block;
    font-size: ${t.f(-1.5)};
  }
  ${t.mq.l} {
    font-size: ${t.f(-0.5)};
  }
`

export const FilterBarContainer = styled.div`
  display: ${p => (p.isOpen ? 'flex' : 'none')};
  position: sticky;
  top: 0;
  z-index: 99;
  justify-content: center;
  padding: ${t.s(1)};
  flex-direction: column;
  align-items: center;
  background-color: ${t.c.lightgrey3};
  color: white;
  ${t.mq.l} {
    display: flex;
    flex-direction: row;
    background-color: ${t.c.darkgrey2};
    padding: ${t.s(0.5)};
  }
`

export const CurrentFilter = styled.div`
  cursor: pointer;
  font-family: ${t.ff.sans2};
  display: flex;
  align-items: center;
  justify-content: center;
  ${t.mq.l} {
    display: none;
  }
  background-color: ${t.c.darkgrey2};
  font-size: ${t.f(0.5)};
  letter-spacing: 0.1rem;
  font-weight: 700;
  text-align: center;
  padding: ${t.s(1)} 0;
  color: ${t.c.yellow};
  span {
    font-size: ${t.f(0)};
    color: ${t.c.lightgrey1};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-right: 15px;
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
  ${t.mq.l} {
    display: none;
  }
`

export const Filter = styled.div`
  font-size: ${t.f(0.5)};
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-family: ${t.ff.sans2};
  &:first-child {
    margin-top: 0;
  }
  cursor: pointer;
  padding: ${t.s(-2)} 0;
  ${t.mq.l} {
    padding: 0;
    margin: 0 ${t.s(1)};
  }
  transition: color ${t.t};
  color: ${p => (p.isActive ? t.c.yellow : t.c.white)};
  :hover {
    color: ${t.c.yellow};
  }
`

export const FilterContainer = styled.div`
  z-index: 5;
  position: sticky;
  top: 0;
  z-index: 99;
`
