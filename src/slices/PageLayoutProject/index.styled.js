import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey2};
  margin: 0 auto;
  display: block;
  padding: 1rem 1rem 4rem 1rem;
  ${t.mq.l} {
    min-height: 50vh;
  }
 `

export const Text = styled.p`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  font-size: 1rem;
`

export const Headline = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  text-align: center;
  font-size: ${t.f(0)};
  font-weight: 300;
  ${t.mq.l} {
    font-size: ${t.f(1)};
  }
`

export const ImageContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Description = styled.div`
  text-align: center;
  max-width: 500px;
  margin: -1rem auto 2rem auto;
  font-family: ${t.ff.sans2};
  font-weight: 300;
  line-height: ${t.lh.copy};
  ${t.mq.l} {
    font-size: ${t.f(0)};
  }
`

export const ProjectTitle = styled.div`
  font-family: ${t.ff.serif};
  color: ${t.c.white};
  font-size: ${t.f(0)};
  position: absolute;
  top: 30%;
  right: 0;
  left: 0;
  font-weight: 400;
  max-width: 200px;
  margin: 0 auto;
  transition: color 200ms;

  ${t.mq.m} {
    font-size: ${t.f(1.5)};
    top: 36%;
  }
`

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0;
  justify-content: center;

  ${t.mq.l} {
    margin-top: -60px;
  }
`

export const Project = styled.div`
  position: relative;
  text-align: center;
  background-color: white;
  margin: 1rem;
  height: ${t.s(8)};
  width: ${t.s(9)};
  overflow: hidden;

  &::after {
    width: 100%;
    height: 10px;
    background-color: ${t.c.yellow};
    position: absolute;
    bottom: 0;
    content: '';
    display: none;
  }

  &:hover {
    &::after {
      display: block;
    }

    ${Image} {
      opacity: 0.4;
    }

    ${ProjectTitle} {
      color: ${t.c.darkgrey1};
    }
  }

  ${t.mq.m} {
    height: ${t.s(9)};
    width: ${t.s(10)};
  }
`


