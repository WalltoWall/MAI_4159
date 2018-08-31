import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey3};
  margin: 0 auto;
  display: block;
  ${t.mq.l} {
    min-height: 50vh;
    margin-top: -50px;
  }
 `

export const Text = styled.p`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  font-size: 1rem;
`

export const Headline = styled.h1`
  color: ${t.c.white};
  font-family: ${t.ff.sans};
  font-size: ${t.f(4)};
  font-weight: 600;
  margin-bottom: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: left;
  ${t.mq.m} {
    font-size: ${t.f(5)};
    width: 100%;
    margin-top: -24px;
    z-index: 2;
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
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;
`

export const Description = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto 2rem auto;
  font-family: ${t.ff.sans2};
  color: ${t.c.darkgrey1};
  font-weight: 300;
  line-height: ${t.lh.copy};
  display: none;
  ${t.mq.l} {
    font-size: ${t.f(0)};
  }
`

export const ProjectTitle = styled.h2`
  font-family: ${t.ff.sans};
  color: ${t.c.white};
  font-size: ${t.f(2)};
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  top: 38%;
  right: 0;
  left: 0;
  font-weight: 600;
  max-width: 200px;
  display: block;
  margin: 0 auto;
  z-index: 5;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;

  ${t.mq.m} {
    font-size: ${t.f(3)};
    top: 40%;
    line-height: 2.2rem;
  }
`

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto 2rem auto;
  justify-content: space-between;
  max-width: 67rem;
`

export const Overlay = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1;
  opacity: 0.3;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;
`

export const Project = styled.div`
  position: relative;
  text-align: center;
  background-color: ${t.c.white};
  margin: 1rem;
  height: ${t.s(8)};
  width: ${t.s(9)};
  overflow: hidden;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;

  &::after {
    width: 100%;
    height: 10px;
    background-color: ${t.c.yellow};
    position: absolute;
    bottom: 0;
    content: '';
    display: none;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    &::after {
      display: block;
    }

    ${Image} {
      opacity: 0.2;
    }

    ${ProjectTitle} {
      color: ${t.c.darkgrey1};
    }

    ${Overlay} {
      opacity: 0;
    }
  }

  ${t.mq.m} {
    height: ${t.s(9)};
    width: ${t.s(10)};
  }
`


