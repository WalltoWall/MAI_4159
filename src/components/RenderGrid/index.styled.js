import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

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
  font-size: ${t.f(2)};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 600;
  color: ${t.c.darkgrey1};
  letter-spacing: ${t.ls.heading};

  ${t.mq.l} {
    font-size: ${t.f(3)};
  }
  ${t.mq.x} {
    font-size: ${t.f(3)};
  }
`

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  margin: 0.5rem 1.2rem;
  width: 100%;
  height: 20rem;
  ${t.mq.m} {
    width: 45%;
    height: 28rem;
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
  height: 50px;
  padding: 1rem;
  width: 100%;
  bottom: 0;
  background-color: ${t.c.white};
  opacity: 0.8;
  z-index: 5;
  -webkit-transition: all 0.1s ease-in;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  ${t.mq.m} {
    height: 55px;
  }
  ${StyledLink}:hover & {
    height: 100%;
    border-bottom: 1rem solid ${t.c.yellow};
  }
`
