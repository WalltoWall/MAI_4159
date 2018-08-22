import styled from 'react-emotion'
import t from 'theme'
import Button from 'components/Button'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-color: ${t.c.lightgrey2};
  position: relative;
 `

export const Headline = styled.h2`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  font-size: ${t.f(5)};
  font-weight: 400;
  width: 50%;
  margin-bottom: 0;
  ${t.mq.l} {
    font-size: ${t.f(6)};
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Description = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  font-weight: 300;
  max-width: 450px;
  margin: 0 auto 2rem 0;
`

export const SplitPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 4rem;
  order: 2;
  ${t.mq.l} {
    width: 45%;
    order: 1;
  }
`

export const ServicesButton = styled(Button)`
  float: left;
`

export const ImageContainer = styled.div`
  width: 100%;
  order: 1;
  -webkit-clip-path: none;
  clip-path: none;
  overflow: hidden;
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
    img {
      object-position: center 20% !important;
    }
  }
  height: 400px;
  ${t.mq.l} {
    width: 55%;
    order: 2;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
  }
`