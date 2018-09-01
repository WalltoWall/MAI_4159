import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${t.c.lightgrey3};
  padding: 3rem 0;
  ${t.mq.l} {
    padding: 7rem 0;
  }
`
export const Content = styled.div`
  width: 70%;
  padding: 0 1rem;
  font-family: ${t.ff.sans2};
`
export const StyledHtmlClassName = css`
  h2 {
    font-size: ${t.f(5)};
    font-family: ${t.ff.serif};
    font-weight: 400;
    color: ${t.c.darkgrey1};
  }
  p {
    color: ${t.c.darkgrey2};
    font-size: ${t.f(1)};
    line-height: 2rem;
  }
`
