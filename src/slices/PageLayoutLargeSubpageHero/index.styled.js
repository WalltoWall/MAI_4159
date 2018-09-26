import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column-reverse; 
  justify-content: center;
  width: 100%;
  height: 100%;
  ${t.mq.l} {
    flex-direction: row;        
  }
`

export const ContentContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  ${t.mq.l} {    
    width: 25%;
  }
`

export const Content = styled.div`
  z-index: 2;
  padding-bottom: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 0 2rem 2rem 2rem;
  background-color: ${t.c.darkgrey1};
  ${t.mq.l} {
    padding: 0 0 3rem 3.5rem;    
  }
  ${t.mq.x} {    
  }
  
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const ClipOverlay = styled.div`
  position: absolute;
  background-color: ${t.c.darkgrey1};
  top: -20%;
  left: -5%;
  height: 65%;
  width: 120%;
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
  z-index: -1;
  ${t.mq.t} {
    left: -13%;
    height: 133%;
    width: 134%;
    top: -30%;
  }
  ${t.mq.m} {
    left: -13%;
    height: 116%;
    width: 134%;
  }
  ${t.mq.l} {
    top: -250%;
    left: -37%;
    height: 370%;
    width: 135%;
  }
  ${t.mq.x} {
    top: -400%;
    left: -50%;
    height: 600%;
    width: 180%;
  } 
`
export const Header = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  ${t.mq.l} {
    text-align: left;
  }
`
export const Title = styled.h1`
  font-size: ${t.f(6)};
  color: ${t.c.yellow};
  font-weight: 600;
  font-family: ${t.ff.sans};
  letter-spacing: 0.2rem;
  margin:
  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
  ${t.mq.x} {
    font-size: ${t.f(6)};
  }
  ${t.mq.xxx} {
    font-size: ${t.f(7)};
  }
`

export const SubTitle = styled.h2`
  font-size: ${t.f(1)};
  letter-spacing: 0.1rem;
  color: ${t.c.white};
  font-weight: 400;
  font-family: ${t.ff.sans2};
  margin: -${t.s(2)} 0 1.2rem 0;
  letter-spacing: 0.2rem;
`

export const InfoContainer = styled.div`
  font-family: ${t.ff.sans2};
  font-size: ${t.f(0)};
  font-weight: 400;
  color: ${t.c.white};
  line-height: ${t.lh.copy};
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  ${t.mq.l} {
    text-align: left;
  } 
`

