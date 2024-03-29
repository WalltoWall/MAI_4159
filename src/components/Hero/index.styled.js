import styled from 'react-emotion'
import t from 'theme'
import { Image } from 'components/Image'

const backgroundColor = ({ has_filter }) => {
  switch (has_filter) {
    case 'Yes':
      return `
        background-color: ${t.c.darkgrey2};
      `

    default:
      return `
        background-color: ${t.c.lightgrey2};
      `
  }
}

export const StyledImage = styled(Image)`
  opacity: 0.75;
`

export const PlaceholderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`

export const ImageContainer = styled.div`
  position: relative;
  height: ${t.s(9)};
  height: 300px;
  overflow: hidden;
  background-color: ${t.c.darkgrey2};
  z-index: 0;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
  ${t.mq.x} {
    height: 350px;
  }
`
export const Title = styled.h1`
  color: ${t.c.yellow};
  font-size: ${t.f(7)};
  font-family: ${t.ff.sans};
  position: absolute;
  text-transform: uppercase;
  text-align: center;
  left: 50%;
  bottom: 25%;
  font-weight: 400;
  letter-spacing: ${t.ls.button};
  transform: translate(-50%, 50%);
  ${t.mq.l} {
    bottom: -10%;
    left: 0;
    margin-top: -20px;
    font-size: ${t.f(8)};
    transform: none;
  }
  ${t.mq.x} {
    font-size: ${t.f(9)};
  }
`

export const ClipOverlay = styled.div`
  position: absolute;
  ${backgroundColor};
  background-color: ${p => (p.whitebg ? 'white' : backgroundColor)};
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
  overflow: hidden;
  ${t.mq.t} {
    bottom: -10%;
    height: 17%;
    width: 120%;
    left: -10%;
  }
  ${t.mq.s} {
    bottom: -17%;
    height: 35%;
  }
  ${t.mq.l} {
    display: block;
    background-color: ${t.c.darkgrey1};
    top: -50px;
    left: -50px;
    height: 140%;
    width: 25%;
  }
`

export const MobileOverlay = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  opacity: 0.5;
  ${t.mq.l} {
    display: ${p => (p.subpage ? 'block' : 'none')};
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  ${t.mq.l} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 72%;
    height: 100%;
  }
`
