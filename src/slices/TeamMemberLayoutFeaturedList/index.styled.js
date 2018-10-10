import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${t.c.white};
  flex-direction: column;
  padding-top: ${t.s(2)};
  ${t.mq.l} {
    flex-direction: row;
  }  
`

export const GridContainer = styled.div`
  width: 100%;  
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
