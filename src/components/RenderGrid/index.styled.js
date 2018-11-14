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
  font-size: ${p=> p.largeImages && !p.longText ? '1.3rem' : '1rem'};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 400;
  color: ${t.c.darkgrey1};
  letter-spacing: ${p=> p.largeImages ? '0.1rem' : '0.05rem'};
  ${t.mq.l} {
    font-size: ${p=> p.largeImages && !p.longText ? '1.5rem' : '1rem'};
  }
  ${t.mq.x} {
    font-size: ${p=> p.largeImages ? '1.5rem' : '1rem'};
  }
`

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  margin: ${p=> p.largeImages ? '0.5rem 0' : '0'};
  width: ${p=> p.largeImages ? '100%' : '50%'};
  height: ${p=> p.largeImages ? '18rem' : '10rem'};
  ${t.mq.m} {
    width: ${p=> p.largeImages ? '48%' : '24%'};
    height: ${p=> p.largeImages ? '20rem' : '12rem'};
    margin: ${p=> p.largeImages ? '0.5rem 1%' : '0.5rem 0.5%'};
  }
  ${t.mq.l} {
    height: ${p=> p.largeImages ? '24rem' : '12rem'};
  }
  ${t.mq.x} {
    height: ${p=> p.largeImages ? '28rem' : '12rem'};
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
  flex-wrap: wrap;
  height: ${p=> p.largeImages && !p.longText ? '50px' : '75px'};
  padding: ${p=> p.largeImages ? '1rem' : '0.5rem'};
  width: 100%;
  bottom: 0;
  background-color: ${t.c.white};
  opacity: 0.8;
  z-index: 5;
  -webkit-transition: all 0.1s ease-in;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  ${t.mq.l} {
    height: ${p=> p.largeImages ? '15%' : '40px'};
  }
  ${StyledLink}:hover & {
    height: 100%;
    border-bottom: 1rem solid ${t.c.yellow};
  }
`
