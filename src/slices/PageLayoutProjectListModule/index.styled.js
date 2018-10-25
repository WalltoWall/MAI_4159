import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  font-family: ${t.ff.sans};
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  font-size: ${t.f(1)};
  font-weight: 400;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: ${t.ls.heading};
  display: flex;
  justify-content: center;
  align-items: center; 
  z-index: 2;
  width: 100%;  
  hover: {
    margin: auto 0;
  }
  ${t.mq.s} {
    font-size: ${t.f(2.5)};
  } 
`

export const StyledLink = styled(Link)`
  position: relative;
  display: ${p => p.show ? "block" : "none"};
  width: ${p=> p.twoInRow ? '100%' : '50%'};
  overflow: hidden;
  padding-top: ${p=> p.twoInRow ? '50%' : '40%'}; 
  ${t.mq.m} {
    padding-top: ${p=> p.twoInRow ? '40%' : '30%'};  
  }
  ${t.mq.l} {
    width: ${p=> p.twoInRow ? '50%' : '25%'};
    padding-top: ${p=> p.twoInRow ? '35%' : '20%'};  
  }
  ${t.mq.l} {
    padding-top: ${p=> p.twoInRow ? '30%' : '15%'};  
  }
  &:hover {
    ${Title} {
      top: 45%;
    }
  }
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

export const OverlayContainer = styled.div`
  position: absolute;
  display: flex;
  padding: 1rem;
  height: 55px;
  width: 100%;
  bottom: 0;
  background-color: ${t.c.white};
  opacity: 0.8;
  z-index: 5;
  -webkit-transition: all 60ms ease-in;
  -moz-transition: all 60ms ease-in;
  -o-transition: all 60ms ease-in;
  transition: all 60ms ease-in;
  ${StyledLink}:hover & {
    height: 100%;
    border-bottom: 1rem solid ${t.c.yellow};
  }
  ${t.mq.t} {
    height: ${p => p.longText && p.bottom ? t.s(4) : t.s(4)}
  }
  ${t.mq.s} {
    height: ${p => p.longText && p.bottom ? t.s(4.5) : t.s(4)}
  }
  ${t.mq.l} {
    height: ${p => p.longText && p.bottom ? t.s(4.5) : t.s(4)}
  }
  ${t.mq.x} {
    height: ${p => p.longText && p.bottom ? t.s(4.5) : t.s(3.5)}
  }
`
