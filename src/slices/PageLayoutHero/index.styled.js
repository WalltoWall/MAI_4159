import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${t.ms.xx};
  height: 60vh;
  background-color: ${t.c.darkgrey1};
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
  width: 70%;
  -webkit-clip-path: polygon(0 0, 88% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 88% 0, 100% 100%, 0% 100%);
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
    img {
      object-position: center 20% !important;
    }
  }
`

export const Image = styled.img``

export const Images = styled.div`
  display: none;
`

export const Copy = styled.p`
  color: ${p => p.textColor};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
`

export const HeadlineWrapper = styled.div`
  position: absolute;
  margin-left: 2rem;
`