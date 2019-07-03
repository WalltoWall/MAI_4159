import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

const backgroundChooser = ({ variation }) => {
  switch (variation) {
    case 'ProjectDetails':
      return `
        background-color: ${t.c.white};
      `

    default:
      return `
        background-color: ${t.c.lightgrey1};
      `
  }
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  ${backgroundChooser};
  flex-wrap: wrap;
  padding: 2rem 0;
  ${t.mq.l} {
    padding: 4rem 0;
  }
`
export const Content = styled.div`
  width: ${t.w.mobile};
  padding: 0;
  font-family: ${t.ff.sans2};
  ${t.mq.l} {
    width: ${t.w.desktop};
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
  }
  h2 {
    font-size: ${t.f(4)};
    font-family: ${t.ff.serif};
    font-weight: 400;
    color: ${t.c.darkgrey1};
    ${t.mq.l} {
      font-size: ${t.f(5)};
    }
  }
  p {
    color: ${t.c.darkgrey2};
    font-size: ${t.f(-1)};
    line-height: ${t.lh.copy};
    ${t.mq.m} {
      font-size: ${t.f(0)};
    }
  }
  ul {
    color: ${t.c.darkgrey2};
    font-size: ${t.f(0)};
    line-height: ${t.lh.copy};
  }
`
