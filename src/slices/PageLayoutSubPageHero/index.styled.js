import styled from 'react-emotion'
import t from 'theme'

export const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  background-color: ${t.c.darkgrey1};
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.4;
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
  font-weight: 600;
  letter-spacing: 0.1rem;
  transform: translate(-50%,50%);
  ${t.mq.l} {
    font-size: ${t.f(9)};
  }
  ${t.mq.l} {
    bottom: -10%;
    left: 420px;
    margin-top: -20px;
    font-size: ${t.f(9)};
    transform: none;
  }
`

export const ClipOverlay = styled.div`
  position: absolute;
  background-color: ${t.c.darkgrey2};
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
    bottom: -15%;
    height: 26%;
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
    display: none;
  }
`
