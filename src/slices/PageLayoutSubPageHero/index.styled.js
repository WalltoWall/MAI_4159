import styled from 'react-emotion'
import t from 'theme'
 export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  height: auto;
  overflow: hidden;
  ${t.mq.m} {
    height: 400px;
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
  ${t.mq.l} {
    width: 100%;
    height: auto;
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