import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'


const backgroundChooser = ({ background_color }) => {
  switch (background_color) {
    case 'Grey':
      return `
        background-color: ${t.c.lightgrey2};
      `

    default:
      return `
        background-color: ${t.c.white};
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
  padding: 4rem 0;
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
    font-size: ${t.f(3)};
    font-family: ${t.ff.serif};
    font-weight: 400;
    color: ${t.c.darkgrey1};
    line-height: 2.6rem;
  }
  ul {
    li {
      color: ${t.c.darkgrey2};
      font-family: ${t.ff.sans2};
      font-size: ${t.f(0.2)};
      line-height: ${t.lh.copy};
    }
  }
  p {
    font-size: ${t.f(0.2)};
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
    font-size: ${t.f(3)};
    width: 220px;
    padding: 0.6rem 0 0.1rem 0;
    text-align: center;
    margin: 0 auto;
    display: block;
    &:hover {
     background-color: ${t.c.darkyellow};
     text-decoration: none;
     transition: background-color 200ms;
    }
  }
`

export const Headline =  styled.div`
  display: block;
  font-size: 2rem;
`
