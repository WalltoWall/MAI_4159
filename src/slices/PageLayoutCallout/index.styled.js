import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  align-items: center;
  display: flex;
  margin: 0 auto;
  min-height: 10vh;
  padding: ${t.s(0)};
  position: relative;
  ${t.mq.l} {
    min-height: 50vh;
  }
 `

export const Text = styled.div`
  color: black;
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
  z-index: 1;
  display: block;
  font-size: 5rem;
`