import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  background: ${t.c.lightgrey1};
  text-align: center;
  padding: 4rem 0 6rem 0;
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
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 90%;
  margin: 0 auto;
  height: ${t.s(11)};

  ${t.mq.m} {
    height: ${t.s(6.5)};
  }
  ${t.mq.l} {
    height: ${t.s(7)};
    width: 75%;
  }
  ${t.mq.x} {
    height: ${t.s(7)};    
    width: 85%;
  } 
  ${t.mq.xx} {
    height: ${t.s(10)};    
    width: 90%;
  }  
`
export const StyledLink = styled(Link)`     
  position: relative;
  display: block;
  margin: 0.5rem 1.2rem;
  width: 100%;    
  ${t.mq.m} {
    width: 27%;
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
  text-align: center;
  margin: auto 0;    
`

export const GridOverlay = styled.div`    
  position: absolute;
  width: 100%;
  height: 100%;
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
    font-size: ${t.f(6)};
  }
  ${StyledLink}:hover & {
    opacity: 1;
  }
`
