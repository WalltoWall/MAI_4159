import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  font-family: ${t.ff.sans};
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin: 0 auto;
`
export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  padding-top: 60%;
  ${t.mq.l} {    
    width: 50%;    
    padding-top: 35%;
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

export const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${t.c.black};
  opacity: 0.5;
  z-index: 2;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  
  ${StyledLink}:hover & {
    opacity: 0.7;
    background-color: ${t.c.white};
    border-bottom: 1rem solid ${t.c.yellow};
  }
`

export const Title = styled.h1`
  position: absolute;  
  display: inline;
  z-index: 3;
  top: 35%;
  left: 0;  
  right: 0;
  font-size: ${t.f(3)};
  font-family: ${t.ff.sans};  
  font-weight: 600;
  color: ${t.c.white};
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  
  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
  ${StyledLink}:hover & {
    color: ${t.c.darkgrey1};
  }
`
