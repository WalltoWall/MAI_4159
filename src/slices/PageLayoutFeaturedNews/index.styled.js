import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Content = styled.div`
  width: ${t.w.mobile};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${t.mq.l} {
    flex-direction: row;
    width: ${t.w.desktop};
    justify-content: space-around;
  }
`

export const ImageContainer = styled.div`
  background-color: ${t.c.darkgrey2};
  display: block;
  width: 100%;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
  height: 320px;
`

export const ArrowWrapper = styled.img`
  display: inline-block;
  width: 8px;
  margin: 0px 0.8rem -2px 0.8rem;
`

export const SectionContainer = styled.div`
  background-color: ${t.c.lightgrey2};
  margin: 0 auto;
  padding: 4rem 0 0 0;
  align-items: left;
`

export const Container = styled.div`
  margin: 1rem auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  ${t.mq.l} {
    align-items: left;
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
  font-family: ${t.ff.serif};
  font-weight: 400;
  display: block;
  width: 100%;
  font-size: ${t.f(2.5)};
  margin-bottom: 0.5rem;
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
  width: 100%;
  margin: 1rem 0;
  ${t.mq.l} {
    width: 48%;
    height: auto;
    margin: 1%;
  }
`
export const ReadMore = styled(Link)`
  font-family: ${t.ff.sans2};
  color: ${t.c.darkgrey1};
  font-size: ${t.f(-1)};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  display: inline-block;
  margin: 0;
  font-weight: 600;
`

export const ContentContainer = styled.div`
  padding: 1.5rem;
  background-color: ${t.c.white};
  min-height: 0;
  flex-grow: 1;

  ${t.mq.l} {
    min-height: 280px;
  }
  ${t.mq.x} {
    min-height: 220px;
  }
`

export const ReadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  position: initial;
  ${t.mq.l} {
    position: absolute;
    bottom: 20px;
  }
`
