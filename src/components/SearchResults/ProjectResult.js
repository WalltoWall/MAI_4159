import React from 'react'
import { Container, ImageContainer, Image, StyledLink, Title } from './ProjectResult.styled'

export const ProjectResult = ({
  path,
  title,
  metaTitle,
  metaDescription,
  imageUrl,
}) => (
  <StyledLink to={path}>
    <Container>    
      <ImageContainer>
        <Image src={imageUrl}/>
        <Title>{metaTitle || title}</Title>
      </ImageContainer>            
    </Container>
  </StyledLink>
)
