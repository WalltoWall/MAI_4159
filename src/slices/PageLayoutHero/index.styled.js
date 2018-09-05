import styled, { keyframes } from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  height: auto;
  background-color: ${t.c.darkgrey1};
  position: relative;
  overflow: hidden;

  ${t.mq.l} {
    height: 800px;
    background-color: ${t.c.white};
  }
`

export const HeadlineWrapper = styled.div`
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  text-align: center;
  position: relative;
  font-weight: 600;
  display: block;
  width: 100%;
  background-color: ${t.c.darkgrey1};
  padding: 2rem;
  -webkit-transform: rotate(-7deg) translate(0, -50px) scale(1.2);
  -ms-transform: rotate(-7deg) translate(0, -50px) scale(1.2);
  transform: rotate(-7deg) translate(0, -50px) scale(1.2);

  ${t.mq.l} {
    position: absolute;
    margin-left: 2rem;
    width: auto;
    background-color: transparent;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
`
export const RotatedContainer = styled.div`
  -webkit-transform: rotate(7deg);
  -ms-transform: rotate(7deg);
  transform: rotate(7deg);
  ${t.mq.l} {
    text-align: left;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
`
export const Headline = styled.h1`
  color: ${t.c.yellow};
  font-size: ${t.f(6)};
  letter-spacing: 3px;
  margin: 0;
  span {
    &:nth-child(1) {
      color: ${t.c.white};
    }
  }
  ${t.mq.l} {
    font-size: ${t.f(10)};
  }
`
const topToBottom = keyframes`
  0% {
    transform: translate(0, -104px);
    opacity: 0.6;
  }

  10% {
    transform: translate(0, -104px);
    opacity: 1;
  }

  20% {
    transform: translate(0, -80px);
    opacity: 0;
  }
`

export const SlidingVertical = styled.div`
  display: in-line;
  text-indent: 114px;
  span {
    font-size: ${t.f(6)};
    letter-spacing: 3px;
    color: ${t.c.white};
    animation: ${topToBottom} 15s linear 0s infinite;
    opacity: 0;
    position: absolute;
    &:nth-child(2) {
      animation-delay: 3s;
    }
    &:nth-child(3) {
      animation-delay: 6s;
    }
    &:nth-child(4) {
      animation-delay: 9s;
    }
    &:nth-child(5) {
      animation-delay: 12s;
    }
    ${t.mq.l} {
      font-size: ${t.f(10)};
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
    img {
      object-position: center 20% !important;
    }
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Gradient = styled.div`
  display: none;
  position: absolute;
  background-image: linear-gradient(to left, transparent 0%, black 100%);
  height: 100%;
  width: 100%;
  opacity: 0.5;

  ${t.mq.l} {
    display: block;
  }
`
export const Description = styled.div`
  color: ${t.c.white};
  width: auto;
  text-align: center;

  ${t.mq.l} {
    text-align: left;
    width: 300px;
  }
`
export const DescriptionWrapper = styled.div`
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  font-weight: 300;
  width: 100%;
  display: block;
  padding: 0 3rem;

  ${t.mq.l} {
    -webkit-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg) translate(30px, 350px);
    padding: 0 3rem;
  }
`

export const Overlay = styled.div`
  display: block;
  position: initial;
  height: 100%;
  width: 100%;
  background-color: ${t.c.darkgrey1};
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0) translate(0, -50px);
  overflow: hidden;
  ${t.mq.l} {
    position: absolute;
    display: block;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    width: 40%;
    height: 120%;
    top: -50px;
    right: -50px;
  }
`
