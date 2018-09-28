import styled from 'react-emotion'
import t from 'theme'

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
  &:last-child {
    border-left: 1px solid white;
    padding-left: 3rem;
    margin-left: 0;
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