import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${t.c.lightgrey1};
  padding: 3rem 2rem;
  ${t.mq.l} {
    padding: 5rem 0;
  }
`

export const LeftColumn = styled.div`
  width: 100%;
  padding: 1rem;
  ${t.mq.l} {
    width: 45%;
    padding: 0 2rem 0 3.5rem;
  }
  ${t.mq.x} {
    width: 35%;
  }
`

export const RightColumn = styled.div`
  width: 100%;
  padding: 1rem;
  ${t.mq.l} {
    width: 45%;
    padding: 0 5rem 0 2rem;
    h1 {
      margin-top: 0;
    }
  }
  ${t.mq.x} {
    width: 35%;
  }
  
`

export const StyledHtmlClassName = css`
  h1 {
    font-family: ${t.ff.sans};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
    font-size: ${t.f(4)};
    color: ${t.c.darkgrey1};
    margin-bottom: 1rem;
  }
  p {
    color: ${t.c.darkgrey2};
    font-family: ${t.ff.sans2};
    line-height: 1.4rem;
  }
`
