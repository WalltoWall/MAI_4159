import styled from 'react-emotion'
import t from 'theme'

export const Content = styled.div`
  width: 20%;
  margin-right: 2rem;
  border-right: 1px dotted #646e6a;
  &:last-child {
    border-right: none;
  }
`

export const ImageContainer = styled.div`  
  width: 100px;
  margin: 0;
  .gatsby-image-outer-wrapper {        
    height: 100%;
  }
  .gatsby-image-wrapper {        
    height: 100%;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${t.mq.l} {
    width: 60%;
  }
`

export const Title = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  display: block;
  text-transform: uppercase;
  font-size: ${t.f(5)};
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`

export const Info = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  display: block;
  font-size: ${t.f(2)};
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`