import styled from 'react-emotion'
import t from 'theme'
import { Button } from 'components/Button'
import { BodyCopy } from 'components/BodyCopy'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-color: ${t.c.white};
  position: relative;
  display: block;
  margin: 0 auto;
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
  letter-spacing: ${t.ls.heading};
  ${t.mq.m} {
    font-size: ${t.f(5)};
  }
  ${t.mq.l} {
    text-align: left;
  }
`

export const Description = styled(BodyCopy)`
  max-width: 450px;
`

export const SplitPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const DescriptionWrapper = styled.div`
  width: ${t.w.mobile};
  padding: 3rem 0;
  order: 2;
  ${t.mq.l} {
    width: 45%;
    order: 1;
  }
`

export const ServicesButton = styled(Button)`
  float: none;
  ${t.mq.l} {
    float: left;
  }
`

// sadly, we won't be can't use clip-path because its not supported by ie or edge
export const ImageContainer = styled.div`
  width: 100%;
  order: 1;
  -webkit-clip-path: none;
  clip-path: none;
  overflow: hidden;
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
  }
  height: 400px;
  ${t.mq.l} {
    width: 55%;
    order: 2;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
  }
`

export const Content = styled.div`
  max-width: none;
  float: none;
  ${t.mq.l} {
    float: right;
    max-width: 600px;
  }
`
