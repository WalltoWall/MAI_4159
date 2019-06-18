import React from 'react'
import { Image } from 'components/Image'
import {
  OverlayContainer,
  ImageContainer,
  StyledLink,
  Title,
} from './index.styled'

export const RenderGrid = ({ alt, key, img, title, src, url, largeImages }) => {
  let text = title ? title : ''
  const imageURL = src
  const imageFluid = img
  return (
    <StyledLink to={url} key={key} largeImages={largeImages}>
      {(imageURL || imageFluid) && (
        <ImageContainer>
          <Image src={imageURL} fluid={imageFluid} alt={alt} fadeIn={false} />
        </ImageContainer>
      )}
      <OverlayContainer largeImages={largeImages} longText={text.length >= 20}>
        <Title largeImages={largeImages}>{text}</Title>
      </OverlayContainer>
    </StyledLink>
  )
}
