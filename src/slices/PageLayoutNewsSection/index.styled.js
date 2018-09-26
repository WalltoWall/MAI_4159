import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

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
    margin: 2rem auto;
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

export const ArrowWrapper = styled.img`
  display: inline-block;
  width: 8px;
  margin: 0 0.8rem;
`

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  align-items: left;
  ${t.mq.l} {
    align-items: left;
    padding: 4rem 0;
  } 
`

export const PostDate = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  display: block;
  margin-bottom: 1rem;
  width: 100%;
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
  line-height: ${t.lh.copy};
  display: block;
  margin-bottom: 1rem;
  width: 100%;
`

export const StyledLink = styled(Link)`     
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem;
  width: 100%; 
  ${t.mq.m} {
    width: 30%;
    height: auto;
    margin: 1rem 1rem 2rem 1rem;
  }
`
export const ReadMore = styled(Link)`
  font-family: ${t.ff.sans2};
  font-size: ${t.f(-1)};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  display: inline-block;
  margin: 0;
`

export const ContentContainer = styled.div`
  padding: 1rem;
  background-color: ${t.c.lightgrey2};
`

export const ReadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Headline = styled.h2`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  font-size: ${t.f(4)};
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  letter-spacing: 1px;
  ${t.mq.m} {
    font-size: ${t.f(5)};
  }
`

