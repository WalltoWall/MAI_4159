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
        background-color: ${t.c.lightgrey3};
      `
  }
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  ${backgroundChooser};
  flex-wrap: wrap;
  padding: 3rem 0;
  ${t.mq.l} {
    padding: 5rem 0;
  }
`
export const Content = styled.div`
  width: 80%;
  padding: 0;
  font-family: ${t.ff.sans2};
  ${t.mq.m} {
    width: 70%;
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
    font-size: ${t.f(0)};
    line-height: 1.8rem;
    ${t.mq.m} {
      font-size: ${t.f(1)};
      line-height: 2rem;
    }
  }
  ul {
    color: ${t.c.darkgrey2};
    font-size: ${t.f(0)};
    line-height: 1.8rem;
    ${t.mq.m } {
      font-size: ${t.f(1)};
      line-height: 2rem;
    }
  }
`


