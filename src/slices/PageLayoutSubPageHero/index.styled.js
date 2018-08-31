import styled from 'react-emotion'
import t from 'theme'

export const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
`
 export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const ClipOverlay = styled.div`
  display: none;
  position: absolute;
  top: -50px;
  left: -50px;
  height: 120%;
  width: 25%;
  background-color: ${t.c.darkgrey1};
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
  overflow: hidden;
  ${t.mq.l} {
    display: block;
  }
`

export const MobileOverlay = styled.div`
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  opacity: 0.5;
  ${t.mq.l} {
    display: none;
  }
`