import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

const backgroundChooser = ({ background_color }) => {
  switch (background_color) {
    case 'white':
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
  padding: 3rem 0;
`
export const Content = styled.div`
  width: 80%;
  padding: 0;
  font-family: ${t.ff.sans2};
  ${t.mq.m} {
    width: 60%;
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
    text-align: center;
  }
  ul {
    li {
      color: ${t.c.darkgrey2};
      font-family: ${t.ff.sans2};
      font-size: ${t.f(0)};
    }
  }
  p {
    font-size: ${t.f(0)};
    line-height: ${t.lh.copy};
    font-family: ${t.ff.sans2};
    font-weight: 400;
    color: ${t.c.darkgrey2};
    text-align: center;
  }
  img {
    display: block;
    width: 100%;
    margin: 1rem;
  }
`
