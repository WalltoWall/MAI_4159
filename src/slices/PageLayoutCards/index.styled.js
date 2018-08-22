import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  margin: 0 auto;
  display: block;
  padding: 4rem 1rem 4rem 1rem;
  ${t.mq.l} {
    min-height: 50vh;
  }
 `

export const Text = styled.p`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  font-size: 1rem;
`

export const Headline = styled.h1`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  text-align: center;
  font-size: ${t.f(5)};
  font-weight: 300;
  margin-bottom: 0;
  ${t.mq.m} {
    font-size: ${t.f(6)};
  }
`

export const ImageContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Description = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto 2rem auto;
  font-family: ${t.ff.sans2};
  color: ${t.c.darkgrey1};
  font-weight: 300;
  line-height: ${t.lh.copy};
  ${t.mq.l} {
    font-size: ${t.f(0)};
  }
`

export const CardTitle = styled.h2`
  font-family: ${t.ff.serif};
  color: ${t.c.white};
  font-size: ${t.f(3)};
  position: absolute;
  top: 38%;
  right: 0;
  left: 0;
  font-weight: 400;
  max-width: 200px;
  display: block;
  margin: 0 auto;
  z-index: 99;
  transition: color 200ms;

  ${t.mq.m} {
    font-size: ${t.f(4)};
    top: 40%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0;
  justify-content: center;
`

export const Card = styled.div`
  position: relative;
  text-align: center;
  background-color: white;
  margin: 1rem;
  height: ${t.s(8)};
  width: ${t.s(9)};
  overflow: hidden;

  &:hover {
    ${Image} {
      opacity: 0.4;
    }
  }
`


