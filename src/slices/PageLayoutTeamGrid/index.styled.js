import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'
import { Link } from 'components/Link'
import { HTMLContent } from 'components/HTMLContent'

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

export const QuoteBlock = styled(HTMLContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${t.c.yellow};
  position: relative;
  width: 50%;
  height: 300px;  
  display: ${p => p.context === "mobile" ? "flex" : "none"};

  align-items: ${p => p.align === "left" ? "flex-start" : "flex-end"};

  p {
    width: 100%;
    text-align: ${p => p.align === "right" ? "right" : "left"};
    padding: 0 ${t.s(0.5)};
    ${t.mq.l} {
      width: 70%;    
      padding-right: ${p => p.align === "right" ? t.s(3) : "0"};
      padding-left: ${p => p.align === "left" ? t.s(3) : "0"};
    }
  }



  ${t.mq.l} {
    width: 25%;
    display: ${p => p.context === "desktop" ? "flex" : "none"};
  }
`

export const BottomQuoteBlock = styled(HTMLContent)`
  display: flex;
  background: ${t.c.yellow};
  flex-direction: column;
  justify-content: center;
  text-align: right;
  align-items: flex-end;
  position: relative;
  width: 50%;
  height: 300px;    
  p {
    width: 100%;    
    padding-right: ${t.s(3)};
    ${t.mq.l} {
      width: 70%;    
    }
  }
  ${t.mq.l} {
    width: 25%;    
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
  display: ${p => p.isOpen ? "flex" : "none"};
  justify-content: center;
  padding: ${t.s(1)};
  flex-direction: column;
  align-items: center;
  ${t.mq.l} {
    display: flex;
    flex-direction: row;
  }
`

export const CurrentFilter = styled.div`
  cursor: pointer; 
  ${t.mq.l} {
    display: none;
  }
  font-size: ${t.f(2)};
  text-align: center;
  padding: ${t.s(1)} 0;
`

// export const FilterBarContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: ${t.s(1)};
  
//   ${t.mq.l} {
//     display: none;   
//   }
// `

export const Filter = styled.div`
  font-size: ${t.f(2)};
  margin: 0 ${t.s(1)};
  cursor: pointer;
`