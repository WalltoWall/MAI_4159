import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'
import { ReactComponent as AssetIconSearchSVG } from 'assets/icon-search.svg'
import { Link } from '../Link'

export const Container = styled.li`
  list-style: none;
  margin-right: ${t.s(2)};
  position: relative;
  transition: color ${t.t};
  &:hover {
    color: ${t.c.white};
  }
  &:last-child {
    margin-right: 0;
  }
`
export const LogoLink = styled(Link)`
  position: absolute;
  z-index: 4;
  left: 50%;
  top: 20px;
  margin: 0 0 0 -29px;
  width: 60px;
  ${t.mq.l} {
    width: 55px;
    left: 0;
    margin: 1rem 0 0 3.5rem;
  }
  ${t.mq.x} {
    width: 65px;
    left: 0;
    margin: 1rem 0 0 3.5rem;
  }
`

export const LogoIcon = styled.img`
  display: block;
  padding-bottom: 3rem;
`

export const NavWrapper = styled.div`
  position: absolute;
  top: 5rem;
  margin-left: 1rem;
  left: 0;
  z-index: 5;
  display: none;
  ${t.mq.l} {
    display: block;
  }
`
export const NavList = styled.ul`
  color: ${t.c.white};
  font-family: ${t.ff.sans2};
  letter-spacing: 0.1rem;
  list-style-type: none;
  font-size: 1.1rem;
  -ms-line-height: 1rem;
  line-height: 1.6rem;
  font-weight: 700;
  font-size: ${t.f(0)};
  margin-top: 0.5rem;
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
   line-height: 1rem;
  }
  ${t.mq.x} {
    font-size: ${t.f(1)};
    -ms-line-height: 1.2rem;
    line-height: 2rem;
    margin-top: 1rem;
  }
`

export const navItemClassName = css`
  transition: transform ${t.t};
  transform: translateY(5%);
  display: inline-block;
  ${Container}:hover & {
    transform: translate(${t.s(-4)}, 5%);
  }
`

export const linkActiveClassName = css`
  border-bottom-color: ${t.c.white};
  color: ${t.c.yellow};
  &:before {
    content: svg(url);
  }
`

export const NavArrow = styled(HoverArrowSVG)`
  flex-shrink: 0;
  height: 0.8rem;
  margin-left: -1rem;
  margin-right: 0.6rem;
  position: relative;
  transition: transform ${t.t};
  transform: translateY(5%);
  z-index: 1;
  display: inline-block;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
    display: inline-block;
    transform: translate(${t.s(-4)}, 5%);
  }
`

export const SearchButtonIcon = styled(AssetIconSearchSVG)`
  cursor: pointer;
  height: ${t.s(0)};
  margin: 0.6rem 0.1rem;
  transform: translate(-10%, -5%);
  width: ${t.s(0)};
`
