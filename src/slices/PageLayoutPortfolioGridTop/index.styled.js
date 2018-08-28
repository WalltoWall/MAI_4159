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
  background-color: black;
  opacity:0.5;
  z-index:2;
  &:hover {
    opacity:1;
  }
`

export const GridTitle = styled.h1`
  position: absolute;
  top: 40%;
  font-size: ${t.f(4)};
  color: ${t.c.darkgrey1};
  letter-spacing: 0.2rem;
  font-weight: 700;
  z-index:3;
  ${t.mq.l} {
    font-size: ${t.f(5)}; 
  }

  ${Grid}:hover & {
    color: white !important;
    top: 40%;
  }
`