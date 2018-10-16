import React from 'react'
import { Image } from 'components/Image'
import {
  OverlayContainer,
  ImageContainer,
  StyledLink,
  Title,
} from './index.styled'

export const RenderGrid = ({ alt, key, img, title, url }) => (
  <StyledLink to={url} key={key}>
    <ImageContainer>
      <Image fluid={img} alt={alt} fadeIn={false} />
    </ImageContainer>
    <OverlayContainer>
      <Title>{title}</Title>
    </OverlayContainer>
  </StyledLink>
)