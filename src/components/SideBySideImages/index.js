import React from 'react'
import { get } from 'lodash'
import {
  Container,
  ImageContainer,
  Caption,
  Images,
  StyledImage,
  CaptionContainer,
} from './index.styled'
import { getUnlessEmptyString } from 'helpers'

export const SideBySideImages = ({ data }) => (
  <Container>
    <Images>
      {get(data, 'items').map(item => (
        <ImageContainer key={getUnlessEmptyString(data, 'primary.image1.alt')}>
          <StyledImage            
            alt={getUnlessEmptyString(data, 'primary.image1.alt')}
            fluid={get(item, 'image1.localFile.childImageSharp.fluid')}
            fadeIn={false}
          />
        </ImageContainer>
      ))}      
    </Images>
    <CaptionContainer>
      <Caption>{get(data, 'primary.caption.text')}</Caption>
    </CaptionContainer>
  </Container>
)
