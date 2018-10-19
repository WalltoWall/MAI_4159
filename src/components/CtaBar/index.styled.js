import styled from 'react-emotion'
import t from 'theme'
import { css } from 'emotion'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${p => p.background === "dark" ? t.c.darkgrey2 : "white"};
  padding: 3rem 0 5rem 0;
`

export const Title = styled.h2`
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-size: ${t.s(2)};
  color: ${t.c.white};
  font-weight: 600;
  letter-spacing: 0.1rem;
  ${t.mq.l} {
    ${t.s(3)};
  }
`

export const CtaHeaderClassName = css`
  h2 {
    font-family: ${t.ff.sans};
    text-transform: uppercase;
    font-size: ${t.s(2)};
    color: ${t.c.white};
    font-weight: 600;
    letter-spacing: 0.1rem;
    ${t.mq.l} {
      ${t.s(3)};
    }
  }
  p {
    font-family: ${t.ff.sans2};
    font-size: ${t.s(0.2)};
    line-height: ${t.lh.copy};
  }
`


export const Content = styled.div`
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  color: ${t.c.white};
  width: 80%;
  text-align: center;
  margin: -1rem 0 1rem 0;
  ${t.mq.l} {
    width: 40%;
  }
`
