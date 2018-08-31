import styled from 'react-emotion'
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

export const Headline = styled.h1`
  color: ${t.c.yellow};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${t.f(6)};
  letter-spacing: 3px;
  text-align: center;
  margin: 0;
      -webkit-transform: rotate(7deg);
      -ms-transform: rotate(7deg);
      transform: rotate(7deg);

  ${t.mq.l} {
    text-align: left;
    font-size: ${t.f(10)};
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
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

export const HeadlineWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: ${t.c.darkgrey1};
  padding: 2rem;
      -webkit-transform: rotate(-7deg) translate(0,-50px) scale(1.2);
      -ms-transform: rotate(-7deg) translate(0,-50px) scale(1.2);
      transform: rotate(-7deg) translate(0,-50px) scale(1.2);

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
