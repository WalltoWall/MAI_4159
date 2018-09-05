import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${t.ff.sans};
`

export const Bar = styled.div`
  background-color: ${t.c.darkgrey2};
  display: flex;
  justify-content: center;
  padding: ${t.s(1)} 0;
  color: ${t.c.white};
  font-size: ${t.f(1)};
  font-weight: 700;
  width: 100%;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 50%;
  ${t.mq.l} {
    width: 33.3333%;
  }
`
export const Grid = styled.div`
  position: relative;
  background-image: url(${p => (p.background ? p.background : 'none')});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60%;
`
export const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: ${t.c.black};
  z-index: 2;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;

  ${Grid}:hover & {
    opacity: 0.7;
    border-bottom: 1rem solid ${t.c.yellow};
    background-color: ${t.c.white};
  }
`

export const GridTitle = styled.h1`
  position: absolute;
  top: 35%;
  font-size: ${t.f(1)};
  color: ${t.c.white};
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 3;
  -webkit-transition: opacity 0.2s ease-in;
  -moz-transition: opacity 0.2s ease-in;
  -o-transition: opacity 0.2s ease-in;
  transition: opacity 0.2s ease-in;
  ${t.mq.m} {
    font-size: ${t.f(4)};
  }
  ${Grid}:hover & {
    color: ${t.c.darkgrey1};
  }
`