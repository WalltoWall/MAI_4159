import styled from 'react-emotion'
import t from '../theme'
import { Link } from './Link'

export const Button = styled(Link)`
  background-color: ${t.c.yellow};
  color: white;
  cursor: pointer;
  font-family: ${t.ff.sans};
  font-weight: 400;
  letter-spacing: ${t.ls.button};
  padding: 0.8rem 0 0.8rem 0;
  font-size: ${p => (p.small ? t.f(1) : t.f(2))};
  display: block;
  width: ${p => (p.small ? '140px' : '200px')};
  text-align: center;
  text-transform: uppercase;
  margin: 1rem auto 0 auto;
  transition: background-color 200ms;

  &:hover {
    background-color: ${t.c.darkyellow};
  }

  ${t.mq.l} {
    font-size: ${p => (p.small ? t.f(2) : t.f(3))};
    width: ${p => (p.small ? '150px' : '220px')};
  }
`
