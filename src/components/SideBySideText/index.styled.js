import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  padding: 3rem 0;
  margin: 0 auto;
  ${t.mq.l} {
    padding: 5rem 0;
  }
`

export const LeftColumn = styled.div`
  width: 100%;
  padding: 1rem 0;
  ${t.mq.l} {
    width: 50%;
  }
`

export const RightColumn = styled.div`
  width: 100%;
  padding: 1rem 0;
  ${t.mq.l} {
    width: 50%;
    h1 {
      margin-top: 0;
    }
  }
`

export const StyledHtmlClassName = css`
  h1 {
    font-family: ${t.ff.sans};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: ${t.ls.button};
    font-size: ${t.f(4)};
    color: ${t.c.darkgrey1};
    margin-bottom: 1rem;
  }
  p {
    color: ${t.c.darkgrey2};
    font-family: ${t.ff.sans2};
    line-height: ${t.lh.copy};
  }
  ul {
    li {
      color: ${t.c.darkgrey2};
      font-family: ${t.ff.sans2};
      line-height: ${t.lh.copy};
    }
  }
  a {
    color: ${t.c.yellow};
  }
`
