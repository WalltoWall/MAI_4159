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
  padding: 2rem 0 6rem 0;
  ${backgroundColor};
`

export const Title = styled.h2`
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-size: ${t.s(2)};
  color: ${t.c.darkgrey1};
  letter-spacing: ${t.ls.heading};
  font-weight: 600;
  text-align: center;
  ${t.mq.l} {
    font-size: ${t.s(3)};
  }
`

export const Description = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.serif};
  line-height: ${t.lh.copy};
  font-size: ${t.s(1)};
  font-weight: 400;
  width: ${t.w.mobile};
  text-align: center;
  margin: -1rem auto 3rem auto;
  ${t.mq.l} {
    width: ${t.w.desktop};
    font-size: ${t.s(1.5)};
    margin: -1rem auto 6rem auto;
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
  width: ${t.w.mobile};
  margin: 0 auto;
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  line-height: ${t.lh.copy};
  font-size: ${t.f(0)};
  margin-bottom: 4rem;
  text-align: center;
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
`

export const ImageContainer = styled.div`  
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: ${t.w.mobile};
  margin: 2rem auto;
  ${t.mq.m} {
    width: ${t.w.tablet};
  }
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
`

export const SectionTitle = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans2};
  font-size: ${t.f(2)};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
  margin: 4rem 0 2rem 0;
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
  ul {
    li {
      color: ${t.c.darkgrey1};
      font-family: ${t.ff.sans2};
      font-size: ${t.f(0)};
      line-height: 1.8rem;
    }
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 5rem auto;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
  ${t.mq.m} {
    width: 90%;
  }
  ${t.mq.l} {
    width: 60%;
  }
`

export const TextBlock = styled.div`
  width: 100%;
  margin-right: 2rem;
  ${t.mq.l} {
    width: 45%;
  }
`

export const Projects = styled.div`
  width: ${t.w.mobile};
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-bottom: 1rem;
  justify-content: space-around;
  ${t.mq.m} {
    justify-content: space-between;
  }
  ${t.mq.l} {
    width: ${t.w.desktop};
    margin: 1rem auto;
  }
`
