import styled from 'react-emotion'
import t from '../theme'
import { Link } from './Link'

export const Button = styled(Link)`
  background-color: ${t.c.yellow};
  color: white;
  cursor: pointer;
  font-family: ${t.ff.sans};
  font-weight: 600;
  letter-spacing: 0.1rem;
  padding: 1rem 0 0.5rem 0;
  font-size: ${p => (p.small ? t.f(-1) : t.f(0))};
  display: block;
  width: ${p => (p.small ? '150px' : '220px')};
  text-align: center;
  text-transform: uppercase;
  font-size: ${t.f(3)};
  margin: 1rem auto 0 auto;
  transition: background-color 200ms;

  &:hover {
    background-color: ${t.c.darkyellow};
  }
`
