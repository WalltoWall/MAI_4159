import styled from 'react-emotion'
import { Link } from 'components/Link'
import { css } from 'emotion'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'

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
  background-color: ${t.c.darkgrey2};
  padding: ${t.s(1)} 0;
  text-align: center;
  ${t.mq.l} {
    display: none;
  }
  span {
    font-size: ${t.f(1)};
    color: ${t.c.white};
    font-weight: 600;
  }
`
export const FilterBox = styled.div`
  display: ${p => (p.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding-top: 1rem;
`

export const CurrentFilter = styled.h2`
  font-size: ${t.f(1.5)};
  display: inline-block;
  margin: 0;
  color: ${t.c.yellow};
  text-align: center;
  cursor: pointer;
`

export const StyledLink = styled(Link)`
    z-index: 2;
    padding: 0 1rem;
    margin: 0 2rem;
    -webkit-transition: color .2s ease-in;
    -moz-transition: color .2s ease-in;
    -o-transition: color .2s ease-in;
    transition: color .2s ease-in;

    &:hover {
        color: ${t.c.darkyellow};
    }
`

export const navItemClassName = css`
  display: block;
  margin: 0 2rem;
  color: ${t.c.white};
  font-size: ${t.f(1.5)};
  padding: 0.4rem 0;
  font-weight: 600;
  font-family: ${t.ff.sans2};
  letter-spacing: 3px;
`

export const linkActiveClassName = css`
  color: ${t.c.yellow};
`


export const NavArrow = styled(HoverArrowSVG)`
  flex-shrink: 0;
  height: 1.2rem;
  transform: ${p => p.active ? 'rotate(90deg)' : 'rotate(0deg)'};
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-left: 10px;
  top: 3px;
`