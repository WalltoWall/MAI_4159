import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${t.ms.xx};
  height: 800px;
  background-color: ${t.c.darkgrey1};
  position: relative;
  overflow: hidden;
 `

export const Headline = styled.div`
  color: ${t.c.yellow};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.4rem;
  letter-spacing: 2px;
  margin: 0;
`

export const ImageContainer = styled.div`
  width: 60rem;
  position: relative;
  -webkit-clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
    img {
      object-position: center 20% !important;
    }
  }
`

export const Image = styled.img`
`

export const Gradient = styled.div`
  display: block;
  position: absolute;
  background-image: linear-gradient(to left, transparent 0%, black 100%);
  margin-top: -150px;
  height: 100%;
  width: 100%;
  opacity: 0.5;
`

export const Images = styled.div`
  display: none;
`

export const HeadlineWrapper = styled.div`
  position: absolute;
  margin-left: 2rem;
`

export const Description = styled.div`
  color: white;
  font-family: ${t.ff.sans2};
  font-weight: 300;
  position: absolute;
  right: 0;
  margin-right: 3rem;
  width: 350px;
`