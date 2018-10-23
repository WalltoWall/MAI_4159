import React from 'react'
import { Image } from 'components/Image'
import {
  OverlayContainer,
  ImageContainer,
  StyledLink,
  Title,
} from './index.styled'

export const RenderGrid = ({ alt, key, img, title, url, largeImages }) => (
  <StyledLink to={url} key={key} largeImages={largeImages} >
    <ImageContainer>
      <Image fluid={img} alt={alt} fadeIn={false} />
    </ImageContainer>
    <OverlayContainer largeImages={largeImages} longText={title.length >= 20}>
      <Title 
        largeImages={largeImages} 
        // longText={title.length >= 20}              
      >
        {title}
      </Title>
    </OverlayContainer>
  </StyledLink>
)