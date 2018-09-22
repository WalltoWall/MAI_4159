import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem auto;
  ${t.mq.l} {
    width: 75%;
  }
`

export const ImageContainer = styled.div`  
  width: 100%;  
  .gatsby-image-outer-wrapper {        
    height: 100%;
  }
  .gatsby-image-wrapper {        
    height: 100%;
  }
`

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  margin: 0 auto;
  display: block;
  padding: 4rem 0;
  ${t.mq.l} {
    min-height: 50vh;
  }
`

export const PostTitle = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans2};
  display: block;
  width: 100%;
  font-size: ${t.f(2)};
  margin-bottom: 1rem;
`

export const PostContent = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  display: block;
  margin-bottom: 1rem;
  width: 100%;
`

export const StyledLink = styled(Link)`     
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0.5rem 1.2rem;
  width: 100%;
  height: 20rem;    
  ${t.mq.m} {
    width: 30%;
    height: 30rem;
  }
`
export const ReadMore = styled(Link)`
  font-family: ${t.ff.sans2};
  font-size: ${t.f(-1)};
  text-transform: uppercase;
  &:hover {
    color: ${t.c.yellow};
  }
`

export const ContentContainer = styled.div`
  padding: 1rem;
  background-color: ${t.c.lightgrey2};
`


