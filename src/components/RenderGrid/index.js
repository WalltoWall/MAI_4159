import React from 'react'
import { Image } from 'components/Image'
import {
  OverlayContainer,
  ImageContainer,
  StyledLink,
  Title,
} from './index.styled'

export const RenderGrid = ({ alt, key, img, title, url, largeImages }) => {
  let text = title ? title : ''
  return (
    <StyledLink to={url} key={key} largeImages={largeImages}>
      <ImageContainer>
        <Image fluid={img} alt={alt} fadeIn={false} />
      </ImageContainer>
      <OverlayContainer largeImages={largeImages} longText={text.length >= 20}>
        <Title largeImages={largeImages}>{text}</Title>
      </OverlayContainer>
    </StyledLink>
  )
}
