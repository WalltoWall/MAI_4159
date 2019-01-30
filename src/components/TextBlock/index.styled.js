import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

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
    case 'Center':
      return `
        text-align: center;
      `
    case 'Left':
      return `
        text-align: left;
      `
    default:
      return `
        text-align: left;
      `
  }
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  ${backgroundChooser};
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 4rem 0;
`

export const Content = styled.div`
  width: ${t.w.mobile};
  margin: 0 auto;
  ${t.mq.l} {
    width: ${t.w.desktop};  
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`

export const StyledHTMLContent = styled(HTMLContent)`
  text-align: left;
  ${t.mq.l} {
    ${textAlignment};
  }
`

export const StyledHtmlClassName = css`
  h1 {
    font-size: ${t.f(4)};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-family: ${t.ff.sans};
    font-weight: 400;
    color: ${t.c.darkgrey1};
  }
  h2 {
    font-size: ${t.f(3)};
    font-family: ${t.ff.serif};
    font-weight: 400;
    color: ${t.c.darkgrey1};
    line-height: 2.4rem;
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
    color: ${t.c.darkyellow};
    cursor: pointer;    
    font-weight: 600;    
  }
`

export const Headline = styled.div`
  display: block;
  font-size: 2rem;
`
