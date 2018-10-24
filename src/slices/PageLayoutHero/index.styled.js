import styled, { keyframes } from 'react-emotion'
import t from 'theme'
import { css } from 'emotion'

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
    height: 100vh;
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
  z-index: 0;
  -webkit-transform: rotate(-7deg) translate(0, -50px) scale(1.2);
  -ms-transform: rotate(-7deg) translate(0, -50px) scale(1.2);
  transform: rotate(-7deg) translate(0, -50px) scale(1.2);
  ${t.mq.l} {
    position: absolute;
    margin-left: 2rem;
    width: auto;
    z-index: 1;
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
export const Headline = styled.div`
  color: ${t.c.yellow};
  font-size: ${t.f(6)};
  font-weight: 400;
  letter-spacing: 3px;
  margin: 1rem 0 -1rem 0;
  span {
    display: none;
    &:nth-child(1) {
      color: ${t.c.white};
    }
    ${t.mq.l} {
      display: inline;
    }
  }
  h1 {
    font-size: ${t.f(5)};
    margin: 0;
    ${t.mq.m} {
      margin-top: 10px;
      font-size: ${t.f(6.5)};
    }
    ${t.mq.l} {
      display: none;
    }
  }
  ${t.mq.l} {
    font-size: ${t.f(9)};
  }
  ${t.mq.x} {
    font-size: ${t.f(10)};
  }
`

export const SubHeadline = styled.span`
  display: none;
  font-family: ${t.ff.sans2};
  position: absolute;
  left: 22%;
  font-weight: 700;
  letter-spacing: 2px;
  top: 55%;
  color: white;
  text-transform: uppercase;
  z-index: 2;
  ${t.mq.l} {
    left: 240px;
    top: 55%;
    display: block;
    font-size: ${t.f(2.5)};
  }
  ${t.mq.x} {
    left: 270px;
    top: 55%;
    font-size: ${t.f(3)};
  }
`
const topToBottom = keyframes`

  0% {
    transform: translateY(40px) rotateX(90deg);    
    opacity: 1;
  }

  2% {
    transform: rotateX(0deg);    
    opacity: 1;
  }

  20% {
    transform: rotateX(0deg);    
    opacity: 1;
  }
  
  22% {
    transform: translateY(-40px) rotateX(-90deg);    
    opacity: 0.5;
  }

  23% {    
    opacity: 0;
  }

`

export const SlidingVertical = styled.div`
  display: none;
  text-indent: 25px;
  span {
    margin-left: -${t.s(1)};
    font-size: ${t.f(6)};
    letter-spacing: 3px;
    color: ${t.c.white};
    animation: ${topToBottom} 10s linear 0s infinite;
    opacity: 0;
    position: absolute;
    &:nth-child(2) {
      animation-delay: 2s;
    }
    &:nth-child(3) {
      animation-delay: 4s;
    }
    &:nth-child(4) {
      animation-delay: 6s;
    }
    &:nth-child(5) {
      animation-delay: 8s;
    }
    ${t.mq.l} {
      font-size: ${t.f(9)};
    }
    ${t.mq.x} {
      font-size: ${t.f(10)};
    }
  }
  ${t.mq.l} {
    display: inline;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
  }
  ${t.mq.l} {
    height: 100%;
  }
`

export const Gradient = styled.div`
  display: none;
  position: absolute;
  background-image: linear-gradient(to left, transparent 0%, black 100%);
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: 1;
  ${t.mq.l} {
    display: block;
  }
`

export const DescriptionWrapper = styled.div`
  line-height: ${t.lh.copy};
  font-weight: 400;
  width: ${t.w.mobile};
  margin: 0 auto;
  display: block;
  padding: 0 0.5rem;
  ${t.mq.l} {
    -webkit-transform: rotate(3deg) translate(30px, 1rem);
    -ms-transform: rotate(3deg) translate(30px, 1rem);
    transform: rotate(3deg) translate(30px, 1rem);
    padding: 0 3rem;
    margin: 0;
  }
  ${t.mq.x} {
    -webkit-transform: rotate(3deg) translate(50px, 1.1rem);
    -ms-transform: rotate(3deg) translate(50px, 1.1rem);
    transform: rotate(3deg) translate(50px, 1.1rem);
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
    display: flex;
    align-items: center;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    width: 40%;
    height: 120%;
    top: -50px;
    right: -70px;
  }
  ${t.mq.x} {
    right: -140px;
  }
`

export const StyledHtmlClassName = css`
  h2 {
    font-size: ${t.f(4)};
    font-family: ${t.ff.serif};
    font-weight: 400;
    color: ${t.c.lightgrey1};
    text-align: center;
    ${t.mq.l} {
      font-size: ${t.f(4)};
      text-align: left;
      width: 300px;
      margin-bottom: 0.5rem;
    }
    ${t.mq.x} {
      font-size: ${t.f(5)};
      width: 320px;
    }
  }
  p {
    color: ${t.c.white};
    width: auto;
    font-weight: 400;
    text-align: center;
    font-family: ${t.ff.sans2};
    font-size: ${t.s(0.5)};
    ${t.mq.l} {
      text-align: left;
      width: 300px;
      font-size: ${t.s(0.3)};
    }
    ${t.mq.x} {
      width: 320px;
      font-size: ${t.s(0.5)};
    }
  }
`
