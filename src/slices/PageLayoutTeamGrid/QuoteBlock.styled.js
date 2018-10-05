import styled from 'react-emotion'
import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

export const QuoteContainer = styled.div`
  position: relative;
  width: 50%;
  height: 200px;   
  
  ${t.mq.l} {
    width: 25%;   
    height: 300px;  
  }
  display: ${p => p.context === "mobile" ? "flex" : "none"};
  ${t.mq.l} {    
    display: ${p => p.context === "desktop" ? "flex" : "none"};
  }
  // overflow-y: hidden;
`

export const Quote = styled(HTMLContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${t.c.yellow};  
  position: relative; 
  z-index: 5;
  align-items: ${p => p.align === "left" ? "flex-start" : "flex-end"};
  p {
    z-index: 5;
    width: 100%;
    text-align: ${p => p.align === "right" ? "right" : "left"};
    padding: 0 ${t.s(0.5)};
    ${t.mq.l} {
      width: 70%;    
      padding-right: ${p => p.align === "right" ? t.s(3) : "0"};
      padding-left: ${p => p.align === "left" ? t.s(3) : "0"};
    }
  }
`

export const BottomQuoteContainer = styled.div`
  position: relative;
  display: flex;
  background: ${t.c.yellow};
  flex-direction: column;
  justify-content: center;  
  align-items: flex-end;
  position: relative;
  flex-grow: 2;
  height: 200px;      
  width: 50%;
  ${t.mq.l} {
    height: 300px;
  }
`
export const BottomQuoteBlock = styled(HTMLContent)`   
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    z-index: 5;
    width: 100%;    
    padding-right: ${t.s(3)};
    ${t.mq.l} {
      width: 50%;    
    }
  }
`

export const ClipOverlay = styled.div`
  position: absolute;
  background-color: ${t.c.yellow};
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);  
  z-index: 1;
  height: 130%;
  width: 52%;
  top: ${p=> p.align === "left" ? '-38px' : '-50px'};
  left: ${p=> p.align === "left" ? 'unset' : '120px'}; 
  right: ${p => p.align === "left" ? '120px' : 'unset'};  
  
  ${t.mq.l} {           
    left: ${p=> p.align === "left" ? 'unset' : '115px'}; 
    right: ${p => p.align === "left" ? '115px' : 'unset'};        
  }
`

export const ClipContainer = styled.div`  
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${p => p.align === "left" ? 
    "margin-left: 8rem;"
  : "margin-left: -8rem;"
  } 
`