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

const textAlignment = ({ align_text }) => {
  switch (align_text) {
    case 'center':
      return `
        text-align: center;
      `

    default:
      return `
        text-align: left;
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
  ${textAlignment};
  ${t.mq.m} {
    width: 60%;
  }
  ${t.mq.l} {
    width: 50%;
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
  }
  h2 {
    font-size: ${t.f(4)};
    font-family: ${t.ff.serif};
    font-weight: 600;
    color: ${t.c.darkgrey1};
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
  }
  img {
    display: block;
    width: 100%;
    margin: 1rem;
  }
  a {
    background-color: ${t.c.yellow};
    color: white;
    cursor: pointer;
    font-family: ${t.ff.sans};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: ${t.f(2)};
    width: 220px;
    padding: 0.5rem 1rem;
    text-align: center;
    margin: 1rem auto;
    display: block;
    &:hover {
     background-color: ${t.c.darkyellow};
     text-decoration: none;
     transition: background-color 200ms;
    }
  }
`
