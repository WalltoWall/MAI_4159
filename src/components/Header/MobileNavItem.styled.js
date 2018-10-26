import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'

export const Container = styled.div`
  position: relative;
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) { 
    display: flex;
    align-items: stretch;
    justify-content: center;
  }
`

export const StyledLinkClassName = css`
  color: ${t.c.white};
  display: inline-block;
  padding: 1rem 0;
  font-size: ${t.f(2)};
  font-weight: 600;
  font-family: ${t.ff.sans2};
  letter-spacing: 0.2rem;
`
export const NavArrow = styled(HoverArrowSVG)`
  position: absolute;
  top: 1.1rem;
  height: 1.2rem;
  width: 1.2rem;
  margin-left: -1.5rem;
  transition: transform ${t.t};
  transform: translateY(5%);
  display: inline-block;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
    transform: translate(${t.s(-4)}, 5%);
  }
`

export const linkActiveClassName = secondary => css``
