import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${t.ff.sans};
`
export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  ${t.mq.l} {
    width: 50%;
  }
`
export const Grid = styled.div`
  position: relative;
  background-image: url(${p => (p.background ? p.background : 'none')});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 75%;
`

export const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${t.c.black};
  opacity: 0.5;
  z-index: 2;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;

  ${Grid}:hover & {
    opacity: 0.7;
    background-color: ${t.c.white};
    border-bottom: 1rem solid ${t.c.yellow};
  }
`

export const GridTitle = styled.h1`
  position: absolute;
  top: 40%;
  font-size: ${t.f(3)};
  font-family: ${t.ff.sans};
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  font-weight: 600;
  color: ${t.c.white};
  letter-spacing: 0.2rem;
  z-index: 3;
  text-transform: uppercase;

  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
  ${Grid}:hover & {
    color: ${t.c.darkgrey1};
  }
`
