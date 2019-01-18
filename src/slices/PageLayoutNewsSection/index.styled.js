import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'
import { BodyCopy } from 'components/BodyCopy'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  ${t.mq.m} {
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
    background-size: cover;
    background-position: center center;
  }
  ${t.mq.s} {
    display: block;
    height: 240px;
  }
  ${t.mq.l} {
    height: 160px;
  }
  ${t.mq.x} {
    height: 180px;
  }
`

export const SectionContainer = styled.div`
  background-color: ${t.c.lightgrey2};
  margin: 0 auto;
  padding: 4rem 0 6rem 0;
  width: ${t.w.mobile};
  align-items: left;
  ${t.mq.l} {
    padding: 6rem 0;
    width: ${t.w.desktop};
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

export const PostContent = styled(BodyCopy)`
  text-align: left;
  margin: 0 auto;
  overflow: hidden;
`

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  margin: 1rem 0;
  ${t.mq.m} {
    width: 50%;
    height: auto;
    padding: 0 0.5rem 2rem 0.5rem;
  }
  ${t.mq.l} {
    width: 25%;
    height: auto;
    padding: 0 0.5rem 2rem 0.5rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.5s ease-in;
`
export const ReadMore = styled(Link)`
  font-family: ${t.ff.sans2};
  color: ${t.c.darkgrey1};
  font-size: ${t.f(-1)};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  display: inline-block;
  margin: 0;
  font-weight: 700;
`

export const ContentContainer = styled.div`
  padding: 1.5rem;
  background-color: ${t.c.white};
  position: relative;
  ${t.mq.m} {
    min-height: 240px;
  }
  ${t.mq.l} {
    min-height: 400px;
  }
  ${t.mq.x} {
    min-height: 300px;
  }
  ${t.mq.xx} {
    min-height: 260px;
  }
`

export const ReadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  position: initial;
  margin-top: 1rem;
  ${t.mq.m} {
    position: absolute;
    bottom: 25px;
    margin-top: 0;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
`

export const ButtonLink = styled(Link)`
  width: 100%;
  margin: 0 auto;
`

export const ArrowWrapper = styled.img`
  display: inline-block;
  width: 8px;
  margin: 0 0.8rem;
  transition: transform 150ms ease-in-out;
  ${ReadMoreWrapper}:hover & {
    transform: translateX(0.3em);
  }
`
