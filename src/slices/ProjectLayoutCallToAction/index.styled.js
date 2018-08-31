import styled from 'react-emotion'
import {css} from 'emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${t.c.darkgrey2};
  padding: 5rem 0 5rem 0;
`

export const CtaHeaderClassName = css`
  h2 {
    font-family: ${t.ff.sans};
    text-transform: uppercase;
    font-size: ${t.s(2.5)};
    color: ${t.c.white};
    font-weight: 600;
  }
  p {
    font-family: ${t.ff.sans2};
  }
` 

export const Content = styled.div`
  color: ${t.c.white};
  width: 80%;
  text-align: center;
  margin: -1rem 0 1rem 0;
  ${t.mq.l} {
    width: 40%;
  }
`
