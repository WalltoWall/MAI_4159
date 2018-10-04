import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const GridContainer = styled.div`
  display: flex; 
  align-items: center;
  flex-wrap: wrap;  
`

export const StyledLink = styled(Link)`  
  display: flex;
  justify-content: center;
  position: relative;
  width: 50%;
  height: 300px;  
  ${t.mq.l} {
    width: 25%;
  }
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const OverlayContainer = styled.div`
  display: flex;  
  position: absolute;
  width: 100%;
  height: 100%;    
  justify-content: center;
  align-items: flex-end;
  bottom: 0; 
  color: yellow;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black; 
  opacity: ${p => p.isActive ? 0 : .8};
`

export const Title = styled.h1`
  
`

export const QuoteBlock = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 50%;
  height: 300px;  
  display: ${p => p.context === "mobile" ? "block" : "none"};
  ${t.mq.l} {
    width: 25%;
    display: ${p => p.context === "desktop" ? "block" : "none"};
  }
`

export const DesktopQuote = styled.div`  
  display: none;
  ${t.mq.l} {
    display: block;
  }
`

export const MobileQuote = styled.div`
  display: block;
  ${t.mq.l} {
   display: none;   
  }
`

export const FilterBarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${t.s(1)};
`


export const Filter = styled.div`
  font-size: ${t.f(2)};
  margin: 0 ${t.s(1)};
  cursor: pointer;
`