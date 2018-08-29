import styled from 'react-emotion'
import { css } from 'emotion'
import { Link } from '../Link'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'

export const Container = styled.div`
  position: relative;
`

export const StyledLinkClassName = css`
  color: ${t.c.white};
  display: inline-block;
  padding: 0.6rem 0;
  font-size: 2rem;
  font-weight: 700;
  font-family: ${t.ff.sans2};
  letter-spacing: 4px;
`
export const NavArrow = styled(HoverArrowSVG)`
  position: absolute;
  top: 1rem;
  height: 1.3rem;
  margin-left: -1.5rem;
  transition: transform ${t.t};
  transform: translateY(5%);
  display:inline-block;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
    transform: translate(${t.s(-4)}, 5%);
  }
`

export const linkActiveClassName = secondary => css``