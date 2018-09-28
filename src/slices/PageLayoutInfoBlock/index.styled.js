import styled from 'react-emotion'
import t from 'theme'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  ${t.mq.l} {
    width: 75%;
    justify-content: flex-start;
    align-content: flex-start;
    margin-top: 2rem;
  }
`

export const ImageContainer = styled.div`  
  display: none;
  width: 100%;  
  .gatsby-image-outer-wrapper {        
    height: 100%;
  }
  .gatsby-image-wrapper {        
    height: 100%;
  }
  ${t.mq.s} {
    display: block;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  ${t.mq.l} {
    align-items: left;
  } 
`

export const Title = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans2};
  display: block;
  width: 100%;
  font-size: ${t.f(2)};
  margin-bottom: 1rem;
`

export const Info = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans2};
  display: block;
  width: 100%;
  font-size: ${t.f(1)};
  margin-bottom: 1rem;
`