import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Content = styled.div`
  width: 100%;
  margin: 1rem 2rem;
  padding-bottom: 1.5rem;
  border-right: none;
  border-bottom: 1px dotted #646e6a;
  overflow-wrap: break-word;
  ${t.mq.s} {
    width: 35%;
  }
  ${t.mq.l} {
    width: 20%;
    border-right: 1px dotted #646e6a;
    border-bottom: none;
    margin: 1.5rem 0;
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
  justify-content: center;
  width: 100%;
  ${t.mq.m} {
    width: 70%;
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
    font-size: ${t.f(5)};
  }
  ${t.mq.l} {
    text-align: left;
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
    ${t.mq.l} {
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
    }
    ${t.mq.l} {
      text-align: left;
    }
  }
`