import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.black};
  color: ${t.c.white};
  cursor: pointer;
  font-size: ${t.f(-3)};
  opacity: 0.25;
  padding: ${t.s(-2, -1)};
  position: fixed;
  right: 0;
  text-transform: uppercase;
  top: 0;
  transition: opacity ${t.t};
  z-index: 1000;

  &:hover {
    opacity: 1;
  }
`
