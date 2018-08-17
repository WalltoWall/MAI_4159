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

export const Text = styled.div`
  color: ${p => p.textColor};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
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

export const Images = styled.div``

export const Copy = styled.p``