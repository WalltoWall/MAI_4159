
import styled from 'react-emotion'
import t from 'theme'

export const Content = styled.div`
  margin: 0.5rem;
  overflow: hidden;
`

export const ImageContainer = styled.a`  
  width: 30px;
  display: block;
  margin: 1rem auto;
  .gatsby-image-outer-wrapper {        
    height: 100%;
  }
  .gatsby-image-wrapper {        
    height: 100%;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem 0 4rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 300px;
  justify-content: center;
`

export const Title = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-size: ${t.f(4)};
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
  ${t.mq.m} {
    text-align: left;
    font-size: ${t.f(5)};
  }
`