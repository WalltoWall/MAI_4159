import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem auto;
  ${t.mq.l} {
    width: 75%;
  }
`

export const ImageContainer = styled.div`  
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;  
  .gatsby-image-outer-wrapper {        
    height: 100%;
  }
  .gatsby-image-wrapper {        
    height: 100%;
  }
`

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  margin: 0 auto;
  display: block;
  padding: 4rem 0;
  ${t.mq.l} {
    min-height: 50vh;
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


export const StyledLink = styled(Link)`     
  position: relative;
  display: block;
  margin: 0.5rem 1.2rem;
  width: 100%;
  height: 20rem;    
  ${t.mq.m} {
    width: 45%;
    height: 28rem;
  }
`

