import styled from 'react-emotion'
import { css } from 'emotion'
import Carousel from 'nuka-carousel'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${t.mq.l} {
    flex-direction: row;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  background-color: ${t.c.darkgrey1};
  ${t.mq.l} {
    width: 22%;
  }
`

export const Content = styled.div`
  z-index: 2;
  padding-bottom: 1rem;
  position: relative;
  bottom: 0;
  width: 90%;
  padding: 0;
  margin: 0 auto 2rem auto;
  ${t.mq.l} {
    padding: 0 2rem 3rem 3.5rem;
    margin: 0;
  }
`

export const CarouselContainer = styled.div`
  height: ${t.s(8.5)};
  width: 100%;
  overflow: hidden;

  ${t.mq.s} {
    height: ${t.s(9.5)};
  }
  ${t.mq.l} {
    height: ${t.s(11)};
  }
  ${t.mq.x} {
    height: ${t.s(11.6)};
  }
  ${t.mq.xx} {
    height: ${t.s(11.8)};
  }
  img {
    object-fit: cover;
    height: 100% !important;
    width: 100%;
    margin-bottom: 0;
  }
  ${t.mq.l} {
    width: 78% !important;
  }
`

export const StyledCarousel = styled(Carousel)`
  height: 100% !important;
  width: 100% !important;
  .slider-frame {
    height: 100% !important;
  }
  .slider-list {
    height: 100% !important;
  }
  .slider-slide {
    height: 100% !important;
  }

  .slider-control-bottomcenter {
    display: none;
    ${t.mq.l} {
      display: block;
    }
    button {
      color: ${t.c.white} !important;
      font-size: ${t.f(5)} !important;
      text-shadow: ${t.c.black} 0px 0 5px !important;
    }
  }
  .slider-control-centerleft {
    z-index: 99;
  }
  .slider-control-centerright {
    z-index: 99;
  }

  ${t.mq.l} {
    .slider-control-centerleft {
      display: none;
      z-index: 99;
    }
    .slider-control-centerright {
      display: none;
      z-index: 99;
    }
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const ClipOverlay = styled.div`
  position: absolute;
  background-color: ${t.c.darkgrey1};
  top: 50%;
  left: -5%;
  height: 65%;
  width: 120%;
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
  z-index: -1;
  ${t.mq.t} {
    left: -${t.s(3)};
    height: ${t.s(6)};
    top: -${t.s(3)};
    width: 150%;
  }
  ${t.mq.m} {
    left: -${t.s(8)};
    height: ${t.s(6)};
    top: -${t.s(3)};
    width: 150%;
  }
  ${t.mq.l} {
    top: -${t.s(11)};
    left: -${t.s(2)};
    height: ${t.s(12.5)};
    width: 150%;
  }
  ${t.mq.x} {
    top: -${t.s(11)};
    left: -${t.s(4)};
    height: ${t.s(13)};
  }
`
export const Header = styled.div`
  width: 100%;
  text-align: left;
  text-transform: uppercase;
`
export const Title = styled.h1`
  font-size: ${t.f(6)};
  color: ${t.c.yellow};
  font-weight: 400;
  font-family: ${t.ff.sans};
  letter-spacing: 0.1rem;
  margin-bottom: 0;
  ${t.mq.l} {
    font-size: ${p => (p.longText ? t.f(4) : t.f(5))};
  }
  ${t.mq.x} {
    font-size: ${p => (p.longText ? t.f(5) : t.f(6))};
  }
  ${t.mq.xxx} {
    font-size: ${p => (p.longText ? t.f(7) : t.f(9))};    
  }
`

export const InfoContainer = styled.div``

export const InfoBlurb = css`
  margin-bottom: -6px;
  h3 {
    font-size: ${t.f(0)};
    color: ${t.c.yellow};
    font-family: ${t.ff.sans2};
    text-transform: uppercase;
    margin-bottom: -0.7rem;
    letter-spacing: 0.1rem;
  }
  p {
    font-family: ${t.ff.serif};
    font-size: ${t.f(0)};
    font-weight: 400;
    color: ${t.c.white};
  }
`

export const InfoLine = styled.hr`
  border-color: ${t.c.lightgrey2};
  opacity: 0.6;
  width: 100px;
  margin: 0;
  margin-right: auto;
`

export const ArrowControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${t.s(1.5)};
  height: ${t.s(1)};
  cursor: pointer;
`

export const ArrowControl = styled.img`
  height: 100%;
  object-fit: contain !important;
  transform: ${p => (p.rotate ? 'rotate(180deg)' : 'none')};
`
