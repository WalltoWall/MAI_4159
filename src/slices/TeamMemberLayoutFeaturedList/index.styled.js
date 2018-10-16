import styled from 'react-emotion'
import t from 'theme'

export const ListTitle = styled.div`
  background-color: ${t.c.lightgrey2};
  padding: ${t.s(3)} 0 ${t.s(2)} 0;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-family: ${t.ff.sans};
  font-size: ${t.f(1.5)};
  letter-spacing: 1px;
  color: ${t.c.darkgrey1};  
  ${t.mq.s} {
    font-size: ${t.f(3)};
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${t.c.white};
  flex-direction: column;
  justify-content: center;
  ${t.mq.l} {
    flex-direction: row;
  }  
`

export const GridContainer = styled.div`
  width: 100%;  
  ${t.mq.l} {
    width: 33.333%;  
  }  
`

export const ImageContainer = styled.div`  
  height: ${t.s(9)};
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
  z-index: 1;
`

export const Content = styled.div`
  position: relative;
  background-color: ${t.c.lightgrey2};
  width: 70%;
  z-index: 3;
  margin: -${t.s(4)} auto ${t.s(4)} auto;
  height: ${t.s(8)};  
  padding: ${t.s(0)} ${t.s(3)};  

  h2 {
    font-size: ${t.f(3)};
    color: ${t.c.darkgrey1};
  }

  div {
    p {
      color: ${t.c.lightgrey3};
    }
  }

  hr {
    width: 60%;    
  }
  
`
