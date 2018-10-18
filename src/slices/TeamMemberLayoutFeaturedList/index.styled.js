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
  width: 85%;
  z-index: 3;
  margin: -${t.s(4)} auto ${t.s(4)} auto;
  height: ${t.s(8)};  
  padding: ${t.s(0)} ${t.s(1)};  

  h2 {
    font-size: ${t.f(3)};
    color: ${t.c.darkgrey1};
    padding-bottom: 5px;
    margin-bottom: 0px;
  }
  
  ${t.mq.l} {
    padding: ${t.s(0)} ${t.s(3)};  
    width: 70%;
  } 

`
export const DetailContainer = styled.div`
  span {
    margin-top: -10px;
    padding-top: 15px;
    display: block;
    color: ${t.c.darkgrey1};
  }
  p {
    margin-top: 5px;
    color: ${t.c.lightgrey3};
    font-weight: 600;
  }
`

export const StyledHR = styled.hr`
  margin: 10px auto 10px 0;
  border-top: 1.5px solid ${t.c.lightgrey3};
  width: 90%;
`