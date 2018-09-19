import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  ${t.mq.l} {
    width: 75%;
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

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  margin: 0 auto;
  display: block;
  padding: 2rem;
  ${t.mq.l} {
    min-height: 50vh;
  }
`

export const OverlayContainer = styled.div`
  text-align: center;
  margin: auto 0;    
`

export const StyledLink = styled(Link)`     
  position: relative;
  display: block;
  margin: 0.5rem 1.2rem;
  width: 100%;
  height: 350px;    
  ${t.mq.m} {
    width: 45%;
  }
`

export const Text = styled.p`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  font-size: 1rem;
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

export const GridOverlay = styled.div`    
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left; 0;
  background-color: ${t.c.white};  
  opacity: 0;
  z-index: 2;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;

  ${StyledLink}:hover & {
    opacity: 0.8;
    border-bottom: 1rem solid ${t.c.yellow};
  }
`

export const Title = styled.p`     
  position: absolute;   
  top: 0;
  bottom: 0; 
  left: 20%;
  height: 16%;
  margin: auto;
  width: 100%;
  opacity: 0;  
  font-size: ${t.f(2)};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 600;
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  z-index: 3;
  -webkit-transition: opacity 0.2s ease-in;
  -moz-transition: opacity 0.2s ease-in;
  -o-transition: opacity 0.2s ease-in;
  transition: opacity 0.2s ease-in;

  ${t.mq.l} {
    font-size: ${t.f(3)};
  }
  ${t.mq.x} {
    font-size: ${t.f(5)};
  }
  ${StyledLink}:hover & {
    opacity: 1;
  }
`
