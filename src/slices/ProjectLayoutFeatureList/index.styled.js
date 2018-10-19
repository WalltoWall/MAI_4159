import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  text-align: center;
  padding: 4rem 0 6rem 0;
  background-color: ${t.c.lightgrey1};
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: ${t.w.mobile};
  margin: 2rem auto;  
  ${t.mq.m} {
    align-items: flex-start;
  }
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`

export const FeatureName = styled.h2`
  font-size: ${t.s(2.5)};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 600;
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  margin-top: 0;
`

export const ImageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const Title = styled.p`
  text-align: center;
  margin: auto;
  width: 100%;
  opacity: 1;
  font-size: ${t.f(1)};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 600;
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  ${t.mq.l} {
    font-size: ${t.f(2)};
  }
`

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  margin: 1rem 0;
  width: 100%;
  height: 14rem;
  ${t.mq.m} {
    width: 42%;
    height: 15rem;
    margin: 0.5rem;
  }
  ${t.mq.l} {
    width: 24%;
    height: 15rem;
    margin: 0.5%;
  }
  &:hover {
    ${Title} {
      position: absolute;
      top: 45%;
      left: 0;
    }
  }
`

export const OverlayContainer = styled.div`
  position: absolute;
  display: flex;
  padding: 1rem;
  height: 50px;
  width: 100%;
  bottom: 0;
  background-color: ${t.c.white};
  opacity: 0.8;
  z-index: 5;
  -webkit-transition: all 0.1s ease-in;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  ${StyledLink}:hover & {
    height: 100%;
    border-bottom: 1rem solid ${t.c.yellow};
  }
`

export const Headline = styled.h1`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  font-size: ${t.f(4)};
  font-weight: 600;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
  display: block;
  z-index: 2;
  width: 100%;
  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
`
