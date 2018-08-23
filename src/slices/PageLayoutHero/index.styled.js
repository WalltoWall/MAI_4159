import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-bottom: 2rem;
  height: auto;
  background-color: ${t.c.white};
  position: relative;
  overflow: hidden;

  ${t.mq.l} {
    height: 800px;
    background-color: ${t.c.darkgrey1};
    padding-bottom: 0;
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

  ${t.mq.l} {
    text-align: left;
    font-size: ${t.f(10)};
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
    img {
      object-position: center 20% !important;
    }
  }
  ${t.mq.l} {
    width: 60%;
    height: 800px;
    -webkit-clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
  }
  ${t.mq.x} {
    width: 70%;
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
  height: 800px;
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
  margin-top: 1rem;

  ${t.mq.l} {
    position: absolute;
    margin-left: 2rem;
    margin-top: 0;
    width: auto;
  }
`

export const Description = styled.div`
  color: ${t.c.darkgrey1};
  width: auto;
  text-align: center;

  ${t.mq.l} {
    color: ${t.c.white};
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
  background-color: ${t.c.white};

  ${t.mq.l} {
    background-color: ${t.c.darkgrey1};
    width: 30%;
  }
`
