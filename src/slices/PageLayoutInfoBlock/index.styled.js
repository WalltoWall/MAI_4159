import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Info = styled.div`
  width: 100%;
  margin: 1rem 2rem;
  padding-bottom: 1.5rem;
  border-left: none;
  border-bottom: 1px dotted #646e6a;
  overflow-wrap: break-word;
  &:last-child {
    border-bottom: none;
  }
  ${t.mq.s} {
    width: 35%;
    &:last-child {
      border-bottom: none;
    }
    &:nth-child(3) {
      border-bottom: none;
    }
  }
  ${t.mq.l} {
    width: 21%;
    border-left: 1px dotted #646e6a;
    border-bottom: none;
    margin: 1.5rem 0;
    height: 100px;
    padding: 0 1.5rem;
    &:first-child {
      border-right: none;
    }
    &:nth-child(3) {
      width: 29%;
    }
    &:last-child {
      width: 29%;
      height: auto;
      border-bottom: 0;
    }
  }
`

export const Content = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: ${t.w.mobile};
  ${t.mq.m} {
    width: ${t.w.desktop};
  }
  ${t.mq.l} {
    justify-content: space-around;
    padding: 4rem 0;
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`

export const StyledHtmlClassName = css`
  h2 {
    font-family: ${t.ff.sans};
    text-transform: uppercase;
    font-weight: 400;
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
