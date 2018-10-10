import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Content = styled.div`
  width: 100%;
  margin: 2rem;
  border-right: none;
  overflow-wrap: break-word;
  ${t.mq.m} {
    width: 40%;
  }
  ${t.mq.l} {
    width: 20%;
    border-right: 1px dotted #646e6a;
    margin: 2rem 0;
    &:last-child {
      border-right: none;
      width: 30%;
    }
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${t.mq.m} {
    width: 90%;
  }
  ${t.mq.l} {
    width: 65%;
    justify-content: space-around;
  }
  ${t.mq.xl} {
    width: 60%;
  }
`

export const Title = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-size: ${t.f(4)};
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: ${t.ls.heading};
  text-align: center;
  ${t.mq.m} {
    text-align: left;
    font-size: ${t.f(5)};
  }
`

export const StyledHtmlClassName = css`
  h2 {
    font-family: ${t.ff.sans};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: ${t.ls.button};
    font-size: ${t.f(1.5)};
    color: ${t.c.darkgrey2};
    text-align: center;
    ${t.mq.m} {
      text-align: left;
     }
  }
  p {
    color: ${t.c.darkgrey2};
    font-family: ${t.ff.sans2};
    font-size: ${t.f(0)};
    line-height: ${t.lh.copy};
    text-align: center;
    ${t.mq.m} {
      font-size: ${t.f(0)};
      text-align: left;
    }
  }
`