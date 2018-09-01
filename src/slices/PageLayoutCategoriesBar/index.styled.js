import styled from 'react-emotion'
import { Link } from 'components/Link'
import t from 'theme'

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
  display: inline-block;
  margin: 0;
  font-size: ${t.f(1)};
  color: ${t.c.yellow};
  text-align: center;
`

export const StyledLink = styled(Link)`
  z-index: 2;
  padding: 0 1rem;
  -webkit-transition: color 0.2s ease-in;
  -moz-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${t.c.yellow};
  }
`
