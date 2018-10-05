import styled from 'react-emotion'
import t from 'theme'
import { css } from 'emotion'

const backgroundColor = ({ background_color }) => {
  switch (background_color) {
    case 'Dark Grey':
      return `
        background-color: ${t.c.lightgrey2};
      `

    default:
      return `
        background-color: ${t.c.lightgrey1};
      `
  }
}

export const Container = styled.div`
  flex-direction: column;
  padding: 2rem;
  ${backgroundColor};
`

export const Title = styled.h2`
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-size: ${t.s(3)};
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-align: center;
`

export const Content = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  font-size: ${t.s(1)};
  width: 100%;
  text-align: center;
  margin: -1rem auto 1rem auto;
  ${t.mq.l} {
    width: 60%;
  }
`
export const Image = styled.img`
  width: 100%;
  padding: 0;
  object-fit: cover;
`

export const ImageWrapper = styled.div`
  max-height: 500px;
  overflow: hidden;
  width: 100%;
  display: block;
   ${t.mq.m} {
    width: 49%;
  }
`

export const ImageDescription = styled.div`
  width: 100%;
  margin: 0 auto;
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  font-size: ${t.f(0)};
  margin-bottom: 0.6rem;
  text-align: center;
  ${t.mq.m} {
    width: 80%;
  }
  ${t.mq.l} {
    width: 60%;
  }
`

export const Description = styled.div`
  font-family: ${t.ff.sans2};
  font-weight: 400;
  line-height: ${t.lh.copy};
  font-size: ${t.s(0)};
  color: ${t.c.darkgrey1};
  display: block;
`

export const ImageContainer = styled.div`  
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  ${t.mq.l} {
    width: 75%;
  }
`

export const ProjectTitle = styled.div`
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-size: ${t.s(1)};
  color: ${t.c.white};
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-align: center;
  opacity: 1;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  z-index: 3;
`

export const StyledHtmlClassName = css`
  h2 {
    color: ${t.c.darkgrey1};
    font-family: ${t.ff.sans2};
    font-size: ${t.f(2)};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  p {
    color: ${t.c.darkgrey1};
    font-family: ${t.ff.sans2};
    font-size: ${t.f(0)};
    margin-bottom: 0.6rem;
    text-align: left;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 3rem auto;
  justify-content: space-between;
  ${t.mq.m} {
    width: 90%;
  }
  ${t.mq.l} {
    width: 60%;
  }
`

export const TextBlock = styled.div`
  width: 100%;
  margin: 1rem auto;
  ${t.mq.m} {
    width: 45%;
  }
`