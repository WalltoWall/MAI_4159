import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${t.ff.sans};
`
export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  ${t.mq.l} {
    width: 50%;
  }
`
export const Grid = styled.div`
  position: relative;  
  background-image: url(${p => p.background ? p.background : 'none'});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 75%;
 `

export const GridOverlay = styled.div`
  position: absolute;
  top:0;
  width:100%;
  height:100%;
  background-color: ${t.c.white};
  opacity:0;
  z-index:2;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;
  
  ${Grid}:hover & {
    opacity:0.8;
    border-bottom: 1rem solid ${t.c.yellow};
  }
`

export const GridTitle = styled.h1`  
  position: absolute;
  opacity: 0;
  top: 40%;
  font-size: ${t.f(4)};
  font-family: ${t.ff.sans};
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  font-weight: 600;
  z-index: 3;
  text-transform: uppercase;
  -webkit-transition: opacity .2s ease-in;
  -moz-transition: opacity .2s ease-in;
  -o-transition: opacity .2s ease-in;
  transition: opacity .2s ease-in;
  
  ${t.mq.l} {
    font-size: ${t.f(5)}; 
  }
  ${Grid}:hover & {
    opacity: 1;
  }
`