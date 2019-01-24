import React from 'react'
import {
  Container,
  ImageContainer,
  Image,
  StyledLink,
  Title,
  TitleContainer,
} from './ProjectResult.styled'

export const ProjectResult = ({
  path,
  title,
  metaTitle,
  imageUrl,
}) => (
  <StyledLink to={path}>
    <Container>
      <ImageContainer>
        <Image src={imageUrl} />
        <TitleContainer>
          <Title>{metaTitle || title}</Title>
        </TitleContainer>
      </ImageContainer>
    </Container>
  </StyledLink>
)
