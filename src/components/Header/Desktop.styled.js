import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'
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
  z-index: 2;
  left: 50%;
  top: 20px;
  margin: 0 0 0 -25px;
  width: 60px;
  ${t.mq.l} {
    width: 95px;
    left: 0;
    margin: 1rem 0 0 1.2rem;
    padding-left: 1.4rem;
  }
`

export const LogoIcon = styled.img`
  display: block;
  padding-bottom: 3rem;
`

export const MobileLogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  margin: 24px 0 0 1.2rem;
  padding-left: 1.4rem;
`

export const NavWrapper = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 30;
  display:none;
  ${t.mq.l} {
    display: block;
  }
`
export const NavList = styled.ul`
  color: {white};
  list-style-type: none;
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: 600;
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
  color: ${t.c.masonyellow};
  &:before {
    content: svg(url)
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
  display:inline-block;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
    display: inline-block;
    transform: translate(${t.s(-4)}, 5%);
  }
`