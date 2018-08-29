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
export const Overlay = styled.div`
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