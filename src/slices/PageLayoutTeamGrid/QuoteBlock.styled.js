import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'
import { HTMLContent } from 'components/HTMLContent'

export const QuoteContainer = styled(Link)`
  display: ${p => (
    (p.context === "mobile" || p.bottom) 
    ? "flex" 
    : "none")
  };
  position: relative;
  justify-content: flex-end;
  width: 50%;
  height: ${t.s(7.5)};    
  flex-grow: ${p => p.bottom ?  "2" : "inherit"};

  ${t.mq.s} { 
    height: ${t.s(9)}; 
  }
  ${t.mq.l} {
    width: 25%;       
    cursor: default;
  }

  ${t.mq.l} {    
    ${p => (     
      (p.context === "desktop" || p.bottom) 
      ? "display: flex" 
      : "display: none"     
    )           
  };
`

export const Quote = styled(HTMLContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${t.c.yellow};  
  position: relative; 
  z-index: 99;
  align-items: ${p => p.align === "left" ? "flex-start" : "flex-end"};
  p {
    font-size: ${t.f(-1)};
    font-family: ${t.ff.serif};
    font-weight: 400;
    color: ${t.c.darkgrey1};  
    z-index: 5;
    width: 100%;
    text-align: ${p => p.align === "right" ? "right" : "left"};
    padding: 0 ${t.s(0.5)};
    ${t.mq.s} {
      font-size: ${t.f(2)};      
    }
    ${t.mq.l} {      
      width: 70%;    
      padding-right: ${p => p.align === "right" ? t.s(3) : "0"};
      padding-left: ${p => p.align === "left" ? t.s(3) : "0"};
    }
  }
`

export const ClipOverlay = styled.div`
  position: absolute;
  background-color: ${t.c.yellow};
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);  
  z-index: 5;
  height: 130%;
  width: 52%;
  top: ${p=> p.align === "left" ? '-38px' : '-50px'};
  left: ${p=> p.align === "left" ? 'unset' : '120px'}; 
  right: ${p => p.align === "left" ? '120px' : 'unset'};  
  
  ${t.mq.l} {           
    left: ${p=> p.align === "left" ? 'unset' : '115px'}; 
    right: ${p => p.align === "left" ? '110px' : 'unset'};        
  }
`

export const ClipContainer = styled.div`  
  position: absolute;
  width: 100%;
  z-index: 5;
  height: 100%;
  overflow: hidden;
  ${p => p.align === "left" ? 
    "margin-left: 8rem;"
  : "margin-left: -8rem;"
  } 
`