import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${t.c.white};
  padding: 2rem 0;
  ${t.mq.l} {
    padding: 4rem 0;
  }
`
export const Content = styled.div`
  width: ${t.w.mobile};
  ${t.mq.l} {
    padding: 0;
    width: ${t.w.desktop};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`
export const StyledHtmlClassName = css`
  h1 {
    font-size: ${t.f(4)};
    text-transform: uppercase;
    letter-spacing: ${t.ls.button};
    font-family: ${t.ff.sans};
    font-weight: 400;
    color: ${t.c.darkgrey1};
  }
  ul {
    li {
      color: ${t.c.darkgrey2};
      font-family: ${t.ff.sans2};
      font-size: ${t.f(0.2)};
      line-height: ${t.lh.copy};
    }
  }
`
