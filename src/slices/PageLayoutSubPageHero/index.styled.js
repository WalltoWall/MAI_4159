import styled from 'react-emotion'
import t from 'theme'

export const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const Title = styled.h1`
  color: ${t.c.yellow};
  font-size: ${t.f(9)};
  font-family: ${t.ff.sans};
  position: absolute;
  text-transform: uppercase;
  left: 50%;
  margin-left: -136px;
  top: 50%;
  margin-top: -50px;
  ${t.mq.l} {
    bottom: -5%;
    left: 26%;
    margin-left: 0;
    top: inherit;
    margin-top: 0;
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
    height: 15%;
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
