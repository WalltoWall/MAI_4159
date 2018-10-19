import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${t.c.lightgrey1};
  padding: 3rem 0;
  ${t.mq.l} {
    padding: 7rem 0;
  }
`
export const Content = styled.div`
  width: ${t.w.mobile};
  ${t.mq.l} {
    width: ${t.w.desktop};
    padding: 0 1rem;
  }
`
export const StyledHtmlClassName = css`
  h2 {
    font-size: ${t.f(3)};
    font-family: ${t.ff.serif};
    font-weight: 400;
    color: ${t.c.darkgrey1};
    ${t.mq.l} {
      font-size: ${t.f(4)};
    }
  }
  p {
    color: ${t.c.darkgrey2};
    font-size: ${t.f(0)};
    font-family: ${t.ff.sans2};
    line-height: ${t.lh.copy};
    ${t.mq.l} {
      font-size: ${t.f(1)};
    }
  }
`
