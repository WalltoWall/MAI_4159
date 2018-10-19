import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${t.c.white};
  padding: 3rem 0;
  ${t.mq.l} {
    padding: 7rem 0;
  }
`
export const Content = styled.div`
  width: ${t.w.mobile};
  ${t.mq.l} {
    padding: 0 1rem;
    width: ${t.w.desktop};
  }
`
export const StyledHtmlClassName = css`
  h1 {
    font-size: ${t.f(4)};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-family: ${t.ff.sans};
    font-weight: 600;
    color: ${t.c.darkgrey1};
  }
  ul {
    li {
      color: ${t.c.darkgrey2};
      font-family: ${t.ff.sans2};
      font-size: ${t.f(0)};
      ${t.mq.l} {
        font-size: ${t.f(1)};
      }
    }
  }
`
