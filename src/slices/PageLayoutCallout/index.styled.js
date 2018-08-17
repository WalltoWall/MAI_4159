import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  align-items: center;
  margin: 0 auto;
  min-height: 10vh;
  padding: ${t.s(0)};
  position: relative;
  ${t.mq.l} {
    min-height: 50vh;
  }
 `

export const Text = styled.p`
  color: black;
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
`

export const Headline = styled.h1`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  font-size: 2.4rem;
`